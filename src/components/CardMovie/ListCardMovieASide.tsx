import React from "react";
import { TitleH2 } from "../shared/TitleH2";
import { CardMovieASide } from "./CardMovieASide";

export async function ListCardMovieASide() {
  // TODO: THEM DU LIEU VAO DAY TOI DA 3 CARD MOVIE ASIDE
  return (
    <aside className="col-span-3 max-xl:hidden py-6 px-6 space-y-4">
      <TitleH2 text="Phim đang chiếu" />
      <CardMovieASide />
      <CardMovieASide />
    </aside>
  );
}
