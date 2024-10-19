import { searchParamsProps } from "@/types/Param";
import { CardMovie } from "./CardMovie";
import { GetAllMovie } from "@/lib/services_api";

export async function ListCardMovie({
  nameQuery,
  searchParams,
}: {
  nameQuery: string;
  searchParams: searchParamsProps;
}) {
  const query = searchParams[nameQuery]?.toString() || "showing";
  const data = await GetAllMovie({ page: 1, pageSize: 8, query });
  const listMovie = data.data;
  return (
    <ul className="grid md:grid-cols-4 grid-cols-2 mt-8 gap-8">
      {listMovie.map((m) => (
        <CardMovie
          key={m.id}
          href={`/bookTickets/${m.id}`}
          src={`${m.thumbnail}`}
          starNum={m.star}
          title={m.name}
          old={m.old}
        />
      ))}
    </ul>
  );
}
