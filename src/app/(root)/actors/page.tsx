import Line from "@/components/shared/Line";
import ListActorOrDirector from "@/components/shared/ListActorOrDirector";
import { searchParamsProps } from "@/types/Param";
import { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const currentPage = Number(searchParams.page) || 1;
  return (
    <>
      <Line className="mt-2 mb-4" />
      <section className="container_custom">
        <h2 className="text-xl uppercase font-semibold border-l-4 border-blue-500 px-4 my-8">
          Diễn viên
        </h2>
        <Line className="border-blue-500 border-t-4 my-4" />
        <Suspense key={currentPage} fallback={<p>Đang tải...</p>}>
          <ListActorOrDirector currentPage={currentPage} type="actors" />
        </Suspense>
      </section>
    </>
  );
}
