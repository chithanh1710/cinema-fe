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

export default function Home({
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
        <Suspense key={`${searchParams[filterMovie.nameQuery]}`}>
          <ListCardMovie
            nameQuery={filterMovie.nameQuery}
            searchParams={searchParams}
          />
        </Suspense>
        <ButtonMainOutline href="movie-showing" />
      </section>
      <hr className="border-t-[6px] my-16 border-gray-100" />

      <section id="blog-movies" className="container_custom">
        <Suspense>
          <FilterMain
            nameQuery={filterBlogs.nameQuery}
            filterList={filterBlogs.filterList}
            title={filterBlogs.title}
          />
        </Suspense>
        <Suspense key={`${searchParams[filterBlogs.nameQuery]}`}>
          <ListBlog
            nameQuery={filterBlogs.nameQuery}
            searchParams={searchParams}
          />
        </Suspense>
      </section>
      <hr className="border-t-[6px] my-16 border-gray-100" />
      <section className="container_custom">
        <TitleH2 text="Tin khuyến mãi" />
        <SliderSub />
      </section>
      <hr className="border-t-[6px] my-16 border-gray-100" />
      <section className="container_custom">
        <TitleH2 text="Trang chủ" />
        <CinemaInfo />
      </section>
    </>
  );
}
