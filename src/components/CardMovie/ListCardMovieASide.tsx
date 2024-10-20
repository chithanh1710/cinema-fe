import React from "react";
import { TitleH2 } from "../shared/TitleH2";
import { CardMovieASide } from "./CardMovieASide";
import { GetAllMovie } from "@/lib/services_api";

export async function ListCardMovieASide({ movieId }: { movieId: number }) {
  const data = await GetAllMovie({ page: 1, pageSize: 5, query: "showing" });
  const listMovie = data.data.filter((d) => d.id !== movieId);
  return (
    <aside className="col-span-3 max-xl:hidden py-6 px-6 space-y-4">
      <TitleH2 text="Phim đang chiếu" />
      {listMovie.map((m) => (
        <CardMovieASide movie={m} key={m.id} />
      ))}
    </aside>
  );
}
