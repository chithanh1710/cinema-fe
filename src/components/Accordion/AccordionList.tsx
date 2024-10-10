"use client";
import { useState } from "react";
import { AccordionCustoms } from "./AccordionCustom";
import { searchParamsProps } from "@/types/Param";
import { Accordion } from "@radix-ui/react-accordion";
import { Cinema } from "@/types/RootCinemas";
import { Movie } from "@/types/RootMovies";
import { format } from "date-fns";

export function AccordionList({
  searchParams,
  cinemas,
  movies,
}: {
  searchParams: searchParamsProps;
  cinemas: Cinema[];
  movies: Movie[];
}) {
  const [activeItem, setActiveItem] = useState("");
  const cinemaName = searchParams.cinemaName?.toString() || null;
  const cityName = searchParams.cityName?.toString() || null;
  const movieId = searchParams.movieId?.toString() || null;
  const timeStart = searchParams.timeStart?.toString() || null;
  const date = searchParams.date?.toString() || null;

  const cinemasFilter = cinemas
    .filter((c) => c.city === cityName)
    .map((tmp) => tmp.name);

  const moviesFilter = movies.map((m) => {
    return {
      id: m.id,
      name: m.name,
      thumbnail: m.thumbnail,
    };
  });

  const paramMovieFilter =
    moviesFilter.find((m) => m.id.toString() === movieId)?.name || null;

  const showTimesFilter = movies
    .find((m) => m.id.toString() === movieId)
    ?.show_times.filter(
      (sh) =>
        sh.cinemaName === cinemaName && format(sh.time_start, "dd/MM") === date
    )
    .map((sh) => format(sh.time_start, "HH:mm"));

  return (
    <Accordion
      className="flex flex-col gap-4"
      value={activeItem}
      onValueChange={setActiveItem}
      type="single"
      collapsible
    >
      <AccordionCustoms
        setActiveItem={setActiveItem}
        queryName="cityName"
        param={cityName}
        data={["TP.HCM", "HÀ NỘI"]}
        name="Chọn địa điểm"
      />
      <AccordionCustoms
        setActiveItem={setActiveItem}
        queryName="cinemaName"
        param={cinemaName}
        data={cinemasFilter}
        name="Chọn rạp"
      />
      <AccordionCustoms
        setActiveItem={setActiveItem}
        queryName="movieId"
        param={paramMovieFilter}
        dataWithImg={cityName && cinemaName ? moviesFilter : []}
        name="Chọn phim"
      />
      <AccordionCustoms
        setActiveItem={setActiveItem}
        queryName="timeStart"
        param={timeStart}
        data={cityName && cinemaName && movieId ? showTimesFilter : []}
        name="Chọn suất"
      />
    </Accordion>
  );
}
