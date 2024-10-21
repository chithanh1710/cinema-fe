import { CardMovie } from "@/components/CardMovie/CardMovie";
import { Search } from "@/components/Search/Search";
import { PaginationCustom } from "@/components/shared/PaginationCustom";
import { GetAllMovie } from "@/lib/services_api";
import { searchParamsProps } from "@/types/Param";

export default async function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const { q, page } = searchParams;
  const data = await GetAllMovie({
    page: Number(page) || 1,
    pageSize: 8,
    q: q?.toString() || "",
  });
  const listMovie = data.data;
  const { totalPage, currentPage, totalItem } = data;
  return (
    <section className="container_custom">
      <div className="mt-4 space-y-2 bg-orange-500 rounded-lg shadow-md text-white p-4 sticky top-2 left-0 z-20">
        <h3 className="font-bold text-2xl">Tìm kiếm phim theo tên: {q}</h3>
        <p className="font-semibold">Số lượng phim tìm thấy: {totalItem}</p>
        <Search isIcon={false} className="border-none text-black bg-white" />
      </div>
      <ul className="grid md:grid-cols-4 grid-cols-2 mt-8 mb-4 gap-8">
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
    </section>
  );
}
