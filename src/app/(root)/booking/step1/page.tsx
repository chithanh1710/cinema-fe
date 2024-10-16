import { AccordionList } from "@/components/Accordion/AccordionList";
import { ButtonLink } from "@/components/Button/ButtonLink";
import { Button } from "@/components/ui/button";
import { GetAllCinema, GetAllMovie } from "@/lib/services_api";
import { searchParamsProps } from "@/types/Param";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import Image from "next/image";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const data = await Promise.all([
    GetAllCinema(),
    GetAllMovie({
      page: 1,
      pageSize: 8,
      cinemaName: searchParams.cinemaName?.toString(),
    }),
  ]);
  const cinemas = data[0].data;
  const movies = data[1].data;
  const { movieId, cinemaName, timeStart, date } = searchParams;
  const movieFindId = movies.find((m) => m.id.toString() === movieId);
  const curTimeStartWithId = movieFindId?.show_times.find(
    (sh) => format(sh.time_start, "dd/MM - HH:mm") === date + " - " + timeStart
  );
  const curTimeStartFormat = curTimeStartWithId?.time_start
    ? format(curTimeStartWithId.time_start, "EEEE#(dd/MM/yyyy)", { locale: vi })
    : null;

  const idShowTime = curTimeStartWithId?.id;

  return (
    <div className="container_custom mt-16">
      <div className="rounded-xl border-t-[6px] border-orange-600 shadow-md bg-white p-4 mb-4">
        <div className="flex sm:gap-8 sm:flex-row flex-col max-sm:pb-6 max-sm:mb-4 border-b-2 border-orange-500">
          <Image
            width={150}
            height={300}
            alt="Ảnh mẫu"
            src={movieId ? `/${movieFindId?.image}` : "/video-img-blank.svg"}
            className={
              movieId
                ? "w-64 h-auto aspect-[3/2] rounded mb-4"
                : "w-32 h-auto aspect-[2/3] rounded mb-4"
            }
          />
          {movieId && (
            <div className="flex flex-col gap-4 items-start">
              <p className="font-semibold">{movieFindId?.name}</p>
              <div className="rounded-sm font-bold text-white py-0.5 px-2 bg-orange-400">
                T{movieFindId?.old}
              </div>
              <p className="font-semibold">{cinemaName}</p>
              {timeStart && (
                <p className="text-sm flex items-center gap-1">
                  Suất:
                  <span className="font-bold text-lg"> {timeStart}</span>
                  <span>-</span>
                  {curTimeStartFormat && (
                    <>
                      <span className="font-bold text-lg">
                        {curTimeStartFormat.split("#")[0]}
                      </span>
                      <span>{curTimeStartFormat.split("#")[1]}</span>
                    </>
                  )}
                </p>
              )}
            </div>
          )}
        </div>
        <Suspense>
          <AccordionList
            movies={movies}
            cinemas={cinemas}
            searchParams={searchParams}
          />
        </Suspense>
      </div>
      {movieId && cinemaName && timeStart && date && (
        <div className="fixed w-full left-0 bottom-0 bg-orange-500 text-white rounded-t-lg">
          <div className="container_custom flex justify-between items-center py-2">
            <p className="font-semibold">
              Tổng cộng: <span>0</span>₫
            </p>
            <div className="space-x-4">
              <ButtonLink
                href={`/`}
                name="Quay lại"
                className="border-none font-semibold"
              />
              <ButtonLink
                href={`/booking/step2?idShowTime=${idShowTime}`}
                name="Tiếp tục"
                className="border-none bg-orange-50 font-semibold"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
