import { searchParamsProps } from "@/types/Param";
import React from "react";
import { ButtonLink } from "../Button/ButtonLink";
import { format } from "date-fns";
import { GetMovieShowtimes } from "@/lib/services_api";

export async function ListMovieAndTheater({
  searchParams,
  id,
}: {
  searchParams: searchParamsProps;
  id: string;
}) {
  const date = searchParams.date
    ? searchParams.date + "/" + new Date().getFullYear()
    : format(Date.now(), "dd/MM/yyyy");

  const cityName =
    searchParams.cityName?.toString() === "Toàn quốc"
      ? ""
      : searchParams.cityName?.toString();
  const cinemaName =
    searchParams.cinemaName?.toString() === "Tất cả rạp"
      ? ""
      : searchParams.cinemaName?.toString();

  const data = await GetMovieShowtimes(Number(id), cinemaName, cityName);

  return (
    <section className="space-y-2">
      {data.data.map((item) => {
        const showTimeButtons = item.screen_rooms.flatMap((scrRoom) =>
          scrRoom.show_dates
            .filter((shDate) => shDate.show_time_date === date)
            .flatMap((value) =>
              value.show_times.map((shTime) => (
                <ButtonLink
                  key={shTime.show_time_start}
                  className="px-7 py-2 duration-500 hover:bg-orange-500 hover:text-white"
                  href={`/booking/${id}?cinemaName=${item.cinema_name}&timeStart=${shTime.show_time_start}`}
                  name={shTime.show_time_start}
                />
              ))
            )
        );

        if (showTimeButtons.length === 0) return null;

        return (
          <div
            key={item.cinema_name}
            className="py-10 px-4 even:bg-gray-50 even:border-y-2 even:border-gray-100"
          >
            <h3 className="text-lg font-medium">
              {item.cinema_name} - {item.city_name}
            </h3>
            <div className="flex md:items-center mt-6 text-sm md:flex-row flex-col max-md:gap-4">
              <p className="w-52">2D Lồng tiếng</p>
              <div className="flex flex-wrap gap-3">{showTimeButtons}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
