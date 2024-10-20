import { CardMovie } from "@/components/CardMovie/CardMovie";
import { PaginationCustom } from "@/components/shared/PaginationCustom";
import { SeoContentPageMovie } from "@/components/shared/SeoContentPageMovie";
import { GetAllMovie } from "@/lib/services_api";
import styles from "@/styles/seoContentPageMovie.module.css";
import { searchParamsProps } from "@/types/Param";

export default async function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const { page } = searchParams;
  const curPage = Number(page) || 1;
  const data = await GetAllMovie({
    page: curPage,
    pageSize: 8,
    query: "showing",
  });
  const listMovie = data.data;
  const { totalPage, currentPage } = data;
  return (
    <>
      <ul className="grid md:grid-cols-4 grid-cols-2 mt-8 gap-8">
        {listMovie.map((m) => (
          <CardMovie
            key={m.id}
            href={`/bookTickets/${m.id}`}
            src={`${m.thumbnail}`}
            starNum={m.star}
            title={m.name}
            old={m.old}
          />
        ))}
      </ul>
      <PaginationCustom totalPage={totalPage} curPage={currentPage} />
      <h2 className="border-l-[4px] border-l-blue-800 pl-2 text-xl uppercase font-semibold text-gray-600 max-sm:hidden my-16">
        Phim đang chiếu
      </h2>
      <ul className={styles["content-seo-page"]}>
        {listMovie.map((m) => (
          <SeoContentPageMovie key={m.id} movie={m} />
        ))}
      </ul>
    </>
  );
}
