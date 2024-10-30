import { FilterMain } from "@/components/shared/FilterMain";
import { Slider } from "@/components/Slider/Slider";
import { Suspense } from "react";
import { ListCardMovie } from "../../components/CardMovie/ListCardMovie";
import { searchParamsProps } from "@/types/Param";
import { filterBlogs, filterMovie } from "@/constants/constFilterMain";
import { ButtonMainOutline } from "@/components/Button/ButtonMainOutline";
import { ListBlog } from "@/components/shared/ListBlog";
import { SliderSub } from "@/components/Slider/SliderSub";
import { CinemaInfo } from "@/components/shared/CinemaInfo";
import { QuickBuy } from "@/components/shared/QuickBuy";
import { TitleH2 } from "@/components/shared/TitleH2";
import Line from "@/components/shared/Line";
import SkeletonListCardMovie from "@/components/Skeleton/SkeletonListCardMovie";

export const revalidate = 0;

export default function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  return (
    <>
      <section className="my-6 relative w-full">
        <Slider />
        <QuickBuy />
      </section>
      <section className="container_custom lg:mt-16">
        <Suspense>
          <FilterMain
            nameQuery={filterMovie.nameQuery}
            filterList={filterMovie.filterList}
            title={filterMovie.title}
          />
        </Suspense>
        <Suspense
          fallback={<SkeletonListCardMovie />}
          key={`${searchParams[filterMovie.nameQuery]}`}
        >
          <ListCardMovie
            nameQuery={filterMovie.nameQuery}
            searchParams={searchParams}
          />
        </Suspense>
        <ButtonMainOutline href="movie-showing" />
      </section>
      <Line />

      <section id="blog-movies" className="container_custom">
        <Suspense>
          <FilterMain
            nameQuery={filterBlogs.nameQuery}
            filterList={filterBlogs.filterList}
            title={filterBlogs.title}
          />
        </Suspense>
        <ListBlog
          nameQuery={filterBlogs.nameQuery}
          searchParams={searchParams}
        />
      </section>
      <Line />
      <section id="deal" className="container_custom">
        <TitleH2 text="Tin khuyến mãi" />
        <SliderSub />
      </section>
      <Line />
      <section className="container_custom">
        <TitleH2 text="Trang chủ" />
        <CinemaInfo />
      </section>
    </>
  );
}
