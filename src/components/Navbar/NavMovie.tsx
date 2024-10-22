import { useEffect, useState } from "react";
import { ListCardMovieSub } from "../CardMovie/ListCardMovieSub";
import { GetMoviesByType } from "@/lib/services_api";
import { Movie } from "@/types/RootMovies";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import SkeletonNavMovie from "../Skeleton/SkeletonNavMovie";

export default function NavMovie() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const dataTmp = await GetMoviesByType();
        if (!dataTmp) {
          throw new Error("No data found.");
        }
        setData(dataTmp);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <SkeletonNavMovie />;

  const dataUpcoming = data.filter((d) => d.type === "SẮP CHIẾU");
  const dataShowing = data.filter((d) => d.type === "ĐANG CHIẾU");
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
          <ListCardMovieSub data={dataShowing} />
          <Link
            href="movie-upcoming"
            className="uppercase border-l-[6px] pl-2 font-light border-blue-800"
          >
            Phim sắp chiếu
          </Link>
          <ListCardMovieSub data={dataUpcoming} />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
