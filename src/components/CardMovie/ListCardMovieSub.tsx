import { Movie } from "@/types/RootMovies";
import { CardMovieSub } from "./CardMovieSub";

export function ListCardMovieSub({ data }: { data: Movie[] }) {
  return (
    <ul className="grid grid-cols-3 gap-6">
      {data.map((d) => (
        <CardMovieSub
          key={d.id}
          href={`/bookTickets/${d.id}`}
          starNum={d.star}
          src={`${d.thumbnail}`}
          title={d.name}
        />
      ))}
    </ul>
  );
}
