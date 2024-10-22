import ListCardMovieSearch from "@/components/CardMovie/ListCardMovieSearch";
import { Search } from "@/components/Search/Search";
import SkeletonListCardMovie from "@/components/Skeleton/SkeletonListCardMovie";
import { searchParamsProps } from "@/types/Param";
import { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const { q, page } = searchParams;
  return (
    <section className="container_custom">
      <div className="mt-4 space-y-2 bg-orange-500 rounded-lg shadow-md text-white p-4 sticky top-2 left-0 z-20">
        <h3 className="font-bold text-2xl">Tìm kiếm phim theo tên: {q}</h3>
        <Suspense>
          <Search isIcon={false} className="border-none text-black bg-white" />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <>
            <p className="font-semibold mt-4">Số lượng phim tìm thấy: </p>
            <SkeletonListCardMovie />
          </>
        }
        key={`${q}${page}`}
      >
        <ListCardMovieSearch searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
