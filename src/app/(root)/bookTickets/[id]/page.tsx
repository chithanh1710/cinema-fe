import { paramsProps, searchParamsProps } from "@/types/Param";
import { ListMovieAndTheater } from "@/components/shared/ListMovieAndTheater";
import { Suspense } from "react";
import { HeroPageId } from "@/components/shared/HeroPageId";
import { MoreInfoMovie } from "@/components/shared/MoreInfoMovie";
import { ListCardMovieASide } from "@/components/CardMovie/ListCardMovieASide";
import { GetMovieById } from "@/lib/services_api";
import SkeletonListMovieAndTheater from "@/components/Skeleton/SkeletonListMovieAndTheater";

export default async function page({
  params,
  searchParams,
}: {
  params: paramsProps;
  searchParams: searchParamsProps;
}) {
  const { id } = params;
  const data = await GetMovieById(Number(id));
  const movieDetails = data.data[0];

  return (
    <>
      <section className="grid grid-cols-9">
        <HeroPageId detail={movieDetails} className="col-span-9" />
        <div className="col-span-6 container_custom max-xl:col-span-9 w-full">
          <MoreInfoMovie id={id} detail={movieDetails} />

          <Suspense
            key={`${searchParams.cityName}_${searchParams.cinemaName}_${searchParams.date}_${id}`}
            fallback={<SkeletonListMovieAndTheater />}
          >
            <ListMovieAndTheater searchParams={searchParams} id={id} />
          </Suspense>
        </div>
        <ListCardMovieASide />
      </section>
    </>
  );
}
