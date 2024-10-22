import { Skeleton } from "@/components/ui/skeleton";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";

export default function SkeletonNavMovie() {
  return (
    <NavigationMenuItem className="!ml-6">
      <NavigationMenuTrigger>Phim</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="flex flex-col gap-4 p-4 w-[500px]">
          <Link
            href="movie-showing"
            className="uppercase border-l-[6px] pl-2 font-light border-blue-800"
          >
            Phim đang chiếu
          </Link>
          <ul className="grid grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i}>
                <div className="relative cursor-pointer group">
                  <Skeleton className="aspect-[2/3] w-[140px] h-[210px] rounded" />
                  <div className="absolute top-[68%] right-0 flex gap-2 items-center px-2 bg-gradient-to-l from-black to-transparent">
                    <Skeleton className="w-5 h-5 rounded-full" />{" "}
                    <Skeleton className="h-6 w-10" />
                  </div>
                  <Skeleton className="absolute bottom-1 right-1 w-8 h-6 bg-orange-400 rounded-sm" />
                  <Skeleton className="w-[100px] h-10 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <Skeleton className="w-[140px] h-6 mt-2 rounded" />
              </li>
            ))}
          </ul>
          <Link
            href="movie-upcoming"
            className="uppercase border-l-[6px] pl-2 font-light border-blue-800"
          >
            Phim sắp chiếu
          </Link>
          <ul className="grid grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i}>
                <div className="relative cursor-pointer group">
                  <Skeleton className="aspect-[2/3] w-[140px] h-[210px] rounded" />
                  <div className="absolute top-[68%] right-0 flex gap-2 items-center px-2 bg-gradient-to-l from-black to-transparent">
                    <Skeleton className="w-5 h-5 rounded-full" />{" "}
                    <Skeleton className="h-6 w-10" />
                  </div>
                  <Skeleton className="absolute bottom-1 right-1 w-8 h-6 bg-orange-400 rounded-sm" />
                  <Skeleton className="w-[100px] h-10 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <Skeleton className="w-[140px] h-6 mt-2 rounded" />
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
