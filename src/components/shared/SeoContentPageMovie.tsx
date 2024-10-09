import { Movie } from "@/types/DatabaseType";
import { format } from "date-fns";

export function SeoContentPageMovie({ movie }: { movie: Movie }) {
  return (
    <li className="space-y-2">
      <h3>
        {movie.name} của đạo diễn {movie.director.name} (
        {format(movie.release_date, "dd/MM/yyyy")})
      </h3>
      {movie.description.split("\n").map((str) => (
        <p key={str}>{str}</p>
      ))}
    </li>
  );
}
