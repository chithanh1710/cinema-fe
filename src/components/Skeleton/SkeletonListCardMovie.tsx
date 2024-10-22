import { Skeleton } from "../ui/skeleton";

export default function SkeletonListCardMovie() {
  return (
    <ul className="grid md:grid-cols-4 grid-cols-2 mt-8 gap-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <li key={i}>
          <div className="w-full h-full cursor-pointer">
            <div className="relative">
              <Skeleton className="aspect-[2/3] w-full h-auto rounded-lg" />
              <Skeleton className="absolute bottom-10 right-1 w-20 h-6 rounded-sm" />
              <Skeleton className="absolute bottom-1 right-1 w-10 h-6 rounded-sm" />
            </div>
            <Skeleton className="w-[80%] h-6 mt-3 rounded" />
          </div>
        </li>
      ))}
    </ul>
  );
}
