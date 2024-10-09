import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSlider() {
  return (
    <div className="relative mt-6">
      <Skeleton className="w-full h-full aspect-[3/1] max-md:aspect-[9/5]" />
      <Skeleton className="rounded-full absolute left-6 size-12 top-1/2 -translate-y-1/2"></Skeleton>
      <Skeleton className="rounded-full absolute right-6 size-12 top-1/2 -translate-y-1/2"></Skeleton>
      <div className="absolute flex gap-2 bottom-5 left-1/2 -translate-x-1/2">
        <Skeleton className="rounded-full size-3 bg-black/20"></Skeleton>
        <Skeleton className="rounded-full size-3 bg-black/20"></Skeleton>
        <Skeleton className="rounded-full size-3 bg-black/20"></Skeleton>
        <Skeleton className="rounded-full size-3 bg-black/20"></Skeleton>
        <Skeleton className="rounded-full size-3 bg-black/20"></Skeleton>
        <Skeleton className="rounded-full size-3 bg-black/20"></Skeleton>
      </div>
    </div>
  );
}
