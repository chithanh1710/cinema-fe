import { LikeAndView } from "@/components/shared/LikeAndView";
import Line from "@/components/shared/Line";
import { PaginationCustom } from "@/components/shared/PaginationCustom";
import { GetDirectors } from "@/lib/services_api";
import { searchParamsProps } from "@/types/Param";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const currentPage = Number(searchParams.page) || 1;
  const data = await GetDirectors({ page: currentPage, pageSize: 10 });
  const listDirectors = data.data;
  const totalPage = Math.ceil(data.totalItem / data.pageSize);
  return (
    <>
      <Line className="mt-2 mb-4" />
      <section className="container_custom">
        <h2 className="text-xl uppercase font-semibold border-l-4 border-blue-500 px-4 my-8">
          Đạo diễn
        </h2>
        <Line className="border-blue-500 border-t-4 my-4" />
        <div className="space-y-4 mb-4">
          {listDirectors.map((d) => (
            <div key={d.id} className="flex gap-4">
              <Image
                width={400}
                height={400}
                alt={d.name}
                src="/images/placeholder.jpeg"
                className="min-w-[80px] max-w-[300px] rounded-lg shadow-sm"
              />
              <div className="space-y-2">
                <Link href={`/directors/${d.id}`} className="font-semibold">
                  {d.name}
                </Link>
                <LikeAndView />
                <p className="text-gray-400 text-sm">Đang cập nhật</p>
              </div>
            </div>
          ))}
        </div>
        <PaginationCustom curPage={currentPage} totalPage={totalPage} />
      </section>
    </>
  );
}
