import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationCustom({
  totalPage,
  curPage,
}: {
  totalPage: number;
  curPage: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${curPage - 1 <= 0 ? 1 : curPage - 1}`}
            className={`${
              curPage - 1 <= 0
                ? "cursor-not-allowed !text-slate-300 hover:bg-transparent"
                : "cursor-pointer bg-gray-100"
            }`}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            className={`${curPage - 2 <= 0 ? "hidden" : ""}`}
            href={`?page=${curPage - 2}`}
          >
            {curPage - 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${curPage - 1 <= 0 ? "hidden" : ""}`}
            href={`?page=${curPage - 1}`}
          >
            {curPage - 1}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            className="bg-slate-600 text-slate-100"
            href={`?page=${curPage}`}
          >
            {curPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            className={`${totalPage + 1 <= curPage + 1 ? "hidden" : ""}`}
            href={`?page=${curPage + 1}`}
          >
            {curPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${totalPage + 1 <= curPage + 2 ? "hidden" : ""}`}
            href={`?page=${curPage + 2}`}
          >
            {curPage + 2}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={`${
              totalPage + 1 <= curPage + 1
                ? "cursor-not-allowed !text-slate-300 hover:bg-transparent"
                : "cursor-pointer bg-gray-100"
            }`}
            href={`?page=${
              totalPage + 1 <= curPage + 1 ? totalPage : curPage + 1
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
