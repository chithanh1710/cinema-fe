import React from "react";
import { TitleH2 } from "../shared/TitleH2";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonListCardMovieASide() {
  return (
    <aside className="col-span-3 max-xl:hidden py-6 px-6 space-y-4">
      <TitleH2 text="Phim đang chiếu" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="w-52 h-6" />
          <Skeleton className="mt-2 aspect-[3/2] w-80 h-auto rounded-md" />
        </div>
      ))}
    </aside>
  );
}
