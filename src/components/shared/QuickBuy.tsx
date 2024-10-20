"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import {
  GetAvailableDates,
  GetAvailableMovies,
  GetAvailableShowtimes,
  GetCinemasByMovie,
} from "@/lib/services_api";
import { DaumGetAvailableMovies } from "@/types/GetAvailableMovies";
import { DaumGetCinemasByMovie } from "@/types/GetCinemasByMovie";
import { DaumGetAvailableShowtimes } from "@/types/GetAvailableShowtimes";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { useRouter } from "next/navigation";

export function QuickBuy() {
  const router = useRouter();
  const [movie, setMovie] = useState("");
  const [theater, setTheater] = useState("");
  const [date, setDate] = useState("");
  const [movieShowtime, setMovieShowtime] = useState("");

  const [movieLoading, setMovieLoading] = useState(false);
  const [theaterLoading, setTheaterLoading] = useState(false);
  const [dateLoading, setDateLoading] = useState(false);
  const [movieShowtimeLoading, setMovieShowtimeLoading] = useState(false);

  const [listMovie, setListMovie] = useState<DaumGetAvailableMovies[]>([]);
  const [listTheater, setListTheater] = useState<DaumGetCinemasByMovie[]>([]);
  const [listDate, setListDate] = useState<string[]>([]);
  const [listMovieShowtime, setListMovieShowtime] = useState<
    DaumGetAvailableShowtimes[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setMovieLoading(true);
        const dataMovie = await GetAvailableMovies();
        setListMovie(dataMovie.data);
      } catch (error) {
        console.error(error);
      } finally {
        setMovieLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (movie && !theater && !date && !movieShowtime) {
          setTheaterLoading(true);
          const dataCinema = await GetCinemasByMovie(Number(movie));
          setListTheater(dataCinema.data);
          setTheaterLoading(false);
        }
        if (movie && theater && !date && !movieShowtime) {
          setDateLoading(true);
          const dataDate = await GetAvailableDates(
            Number(movie),
            Number(theater)
          );
          setListDate(dataDate.data);
          setDateLoading(false);
        }
        if (movie && theater && date && !movieShowtime) {
          setMovieShowtimeLoading(true);
          const dataDate = await GetAvailableShowtimes(
            Number(movie),
            Number(theater),
            format(date, "yyyy-MM-dd")
          );
          setListMovieShowtime(dataDate.data);
          setMovieShowtimeLoading(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTheaterLoading(false);
        setDateLoading(false);
        setMovieShowtimeLoading(false);
      }
    }
    fetchData();
  }, [movie, theater, date, movieShowtime]);

  const cinemaName = listTheater.find(
    (th) => th.id.toString() === theater
  )?.name;
  const cityName = listTheater.find((th) => th.id.toString() === theater)?.city;
  const dateFormat = date && format(date, "dd/MM");
  const showTimeFormat = movieShowtime && format(movieShowtime, "HH:mm");

  return (
    <div className="absolute flex justify-between items-center left-1/2 -translate-x-1/2 -bottom-10 h-16 w-[80%] z-10 bg-white max-lg:hidden shadow-md">
      <Select
        disabled={movieLoading}
        value={movie}
        onValueChange={(value) => {
          setMovie(value);
          setTheater("");
          setDate("");
          setMovieShowtime("");
        }}
      >
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            1
          </div>
          <SelectValue placeholder={movieLoading ? "Đang tải" : "Chọn Phim"} />
        </SelectTrigger>
        <SelectContent>
          {listMovie.map((m) => (
            <SelectItem key={m.id} value={m.id.toString()}>
              {m.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        disabled={movie === "" || theaterLoading}
        value={theater}
        onValueChange={(value) => {
          setTheater(value);
          setDate("");
          setMovieShowtime("");
        }}
      >
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            2
          </div>
          <SelectValue placeholder={theaterLoading ? "Đang tải" : "Chọn Rạp"} />
        </SelectTrigger>
        <SelectContent>
          {listTheater.map((th) => (
            <SelectItem key={th.id} value={th.id.toString()}>
              {th.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        disabled={theater === "" || dateLoading}
        value={date}
        onValueChange={(value) => {
          setDate(value);
          setMovieShowtime("");
        }}
      >
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            3
          </div>
          <SelectValue placeholder={dateLoading ? "Đang tải" : "Chọn Ngày"} />
        </SelectTrigger>
        <SelectContent>
          {listDate.map((date) => (
            <SelectItem key={date} value={date}>
              {format(date, "eeee, dd/MM/yyyy", { locale: vi })}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        disabled={date === "" || movieShowtimeLoading}
        value={movieShowtime}
        onValueChange={(value) => setMovieShowtime(value)}
      >
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            4
          </div>
          <SelectValue
            placeholder={movieShowtimeLoading ? "Đang tải" : "Chọn Suất"}
          />
        </SelectTrigger>
        <SelectContent>
          {listMovieShowtime.map((mSh) => (
            <SelectItem key={mSh.id} value={mSh.time_start}>
              {format(mSh.time_start, "HH:mm")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={() =>
          router.push(
            `/booking/step1?movieId=${movie}&date=${dateFormat}&cityName=${cityName}&cinemaName=${cinemaName}&timeStart=${showTimeFormat}`
          )
        }
        disabled={movieShowtime === ""}
        variant="secondary"
        className="bg-orange-400 font-semibold h-full rounded-none w-full border-none shadow-none text-[16px] text-white disabled:bg-orange-200 hover:bg-orange-600"
      >
        Mua vé nhanh
      </Button>
    </div>
  );
}
