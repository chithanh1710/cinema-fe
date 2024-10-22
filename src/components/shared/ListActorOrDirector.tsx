import React from "react";
import { LikeAndView } from "./LikeAndView";
import { PaginationCustom } from "./PaginationCustom";
import Image from "next/image";
import { GetActors, GetDirectors } from "@/lib/services_api";
import Link from "next/link";
import { type } from "os";

export default async function ListActorOrDirector({
  type,
  currentPage,
}: {
  type: "actors" | "directors";
  currentPage: number;
}) {
  const data =
    type === "actors"
      ? await GetActors({ page: currentPage, pageSize: 6 })
      : await GetDirectors({ page: currentPage, pageSize: 6 });
  const list = data.data;
  const totalPage = Math.ceil(data.totalItem / data.pageSize);
  return (
    <List
      type={type}
      currentPage={currentPage}
      list={list}
      totalPage={totalPage}
    />
  );
}

function List({
  list,
  type,
  currentPage,
  totalPage,
}: {
  list: { name: string; id: number }[];
  currentPage: number;
  totalPage: number;
  type: string;
}) {
  return (
    <>
      <div className="space-y-4 mb-4">
        {list.map((d) => (
          <div key={d.id} className="flex gap-4">
            <Image
              width={400}
              height={400}
              alt={d.name}
              src="/images/placeholder.jpeg"
              className="min-w-[80px] max-w-[300px] rounded-lg shadow-sm"
            />
            <div className="space-y-2">
              <Link href={`/${type}/${d.id}`} className="font-semibold">
                {d.name}
              </Link>
              <LikeAndView />
              <p className="text-gray-400 text-sm">Đang cập nhật</p>
            </div>
          </div>
        ))}
      </div>
      <PaginationCustom curPage={currentPage} totalPage={totalPage} />
    </>
  );
}
