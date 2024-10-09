import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonListMovieAndTheater() {
  return Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="py-10 px-4 even:bg-gray-50 even:border-y-2 even:border-gray-100"
    >
      <Skeleton className="h-6 w-full mb-4" />
      <div className="flex md:items-center mt-6 text-sm md:flex-row flex-col max-md:gap-4">
        <Skeleton className="h-4 w-32 mr-16" />
        <div className="flex flex-wrap gap-3">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>
  ));
}
