import { Banknote } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/RootMovies";

export function CardMovieASide({ movie }: { movie: Movie }) {
  return (
    <div>
      <Link href={`/bookTickets/${movie.id}`}>{movie.name}</Link>
      <div className="relative mt-2 aspect-[3/2] w-80 h-auto rounded-md overflow-hidden group">
        <Image
          alt=""
          src={movie.image}
          fill
          className="w-full h-full object-fill transition-all group-hover:brightness-50"
        />
        <Button
          asChild
          className="transition-all bg-orange-500 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex hover:bg-orange-400"
        >
          <Link href={`/bookTickets/${movie.id}`}>
            <Banknote />
            <span className="ml-2">Mua vé</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
