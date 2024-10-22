import { GetAllMovie } from "@/lib/services_api";
import { searchParamsProps } from "@/types/Param";
import React from "react";
import { PaginationCustom } from "../shared/PaginationCustom";
import { CardMovie } from "./CardMovie";

export default async function ListCardMovieSearch({
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
    <>
      <p className="font-semibold mt-4">Số lượng phim tìm thấy: {totalItem}</p>
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
    </>
  );
}
