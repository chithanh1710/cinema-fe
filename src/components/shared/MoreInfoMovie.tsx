import { Clock, Calendar, Star } from "lucide-react";
import { Suspense } from "react";
import { SliderDate } from "../Slider/SliderDate";
import { FilterSelectTheater } from "./FilterSelectTheater";
import { InfoPage } from "./InfoPage";
import { TitleH2 } from "./TitleH2";
import Image from "next/image";
import { MovieDetails } from "@/types/DatabaseType";
import { format, hoursToMinutes } from "date-fns";
import { getRandomInRange } from "@/utils/utils";

export function MoreInfoMovie({
  detail,
  id,
}: {
  detail: MovieDetails;
  id: string;
}) {
  const timeSplit = detail.duration.split(":")[0];
  const minute = hoursToMinutes(Number(timeSplit[0]) + Number(timeSplit[1]));
  return (
    <>
      <section className="relative flex gap-6">
        <Image
          alt={`Image ${detail.name}`}
          src={`/${detail.thumbnail}`}
          width={400}
          height={600}
          className="lg:max-w-[320px] lg:w-[40vw] min-w-[130px] w-[25vw] aspect-[2/3] object-fill sticky -translate-y-10 border-2 border-white rounded"
        />
        <div className="self-center space-y-2 text-gray-500 text-[15px]">
          <h1 className="text-2xl font-bold text-black">{detail.name}</h1>
          <div className="flex gap-1 items-center">
            <Clock className="size-4 text-orange-500" />
            <span className="text-sm">{minute} phút</span>
            <Calendar className="size-4 ml-3 text-orange-500" />
            <span className="text-sm">
              {format(detail.release_date, "dd-MM-yyyy")}
            </span>
          </div>
          <div className="flex gap-1 items-end">
            <Star className="size-7 fill-current text-orange-500" />
            <span className="lg:text-xl text-lg leading-6">{detail.star}</span>
            <span className="lg:text-sm text-xs text-gray-600">
              ({getRandomInRange()} votes)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="lg:w-28">Quốc gia:</span>
            <span className="text-black">Mỹ</span>
          </div>
          <InfoPage detail={detail} className="max-lg:hidden" />
        </div>
      </section>
      <section className="space-y-8">
        <InfoPage detail={detail} className="lg:hidden" />
        <div>
          <TitleH2 text="Nội dung phim" />
          <p>{detail.description}</p>
        </div>
        <div>
          <TitleH2 text="Lịch chiếu" />
          <div className="flex max-md:flex-col-reverse gap-6 items-center pb-6 border-b-2 border-blue-800 mb-8">
            <Suspense>
              <SliderDate />
            </Suspense>
            <Suspense>
              <FilterSelectTheater id={id} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
