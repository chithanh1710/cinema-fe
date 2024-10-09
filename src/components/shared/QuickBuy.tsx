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

export function QuickBuy() {
  const [movie, setMovie] = useState("");
  const [theater, setTheater] = useState("");
  const [date, setDate] = useState("");
  const [movieShowtime, setMovieShowtime] = useState("");

  const [listMovie, setListMovie] = useState([]);
  const [listTheater, setListTheater] = useState([]);
  const [listDate, setListDate] = useState([]);
  const [listMovieShowtime, setListMovieShowtime] = useState([]);

  useEffect(() => {
    async function fetchListMovie() {
      // TODO: FETCH dữ liệu các phim
    }
  });

  useEffect(() => {
    async function fetchMovieRelatedData() {
      // TODO: FETCH dữ liệu các phim
    }
  }, [movie]);

  return (
    <div className="absolute flex justify-between items-center left-1/2 -translate-x-1/2 -bottom-10 h-16 w-[80%] z-10 bg-white max-lg:hidden">
      <Select value={movie} onValueChange={(value) => setMovie(value)}>
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            1
          </div>
          <SelectValue placeholder="Chọn Phim" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Select
        disabled={movie === ""}
        value={theater}
        onValueChange={(value) => setTheater(value)}
      >
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            2
          </div>
          <SelectValue placeholder="Chọn Rạp" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Select
        disabled={theater === ""}
        value={date}
        onValueChange={(value) => setDate(value)}
      >
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            3
          </div>
          <SelectValue placeholder="Chọn Ngày" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Select
        disabled={date === ""}
        value={movieShowtime}
        onValueChange={(value) => setMovieShowtime(value)}
      >
        <SelectTrigger className="w-full border-none shadow-none !ring-0 !outline-none !ring-offset-0">
          <div className="bg-orange-500 size-6 flex items-center justify-center text-white rounded-full ">
            4
          </div>
          <SelectValue placeholder="Chọn Suất" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Button
        disabled={movieShowtime === ""}
        variant="secondary"
        className="bg-orange-400 font-semibold h-full rounded-none w-full border-none shadow-none text-[16px] text-white disabled:bg-orange-200 hover:bg-orange-600"
      >
        Mua vé nhanh
      </Button>
    </div>
  );
}
