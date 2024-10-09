import React from "react";
import { CardMovieSub } from "./CardMovieSub";

export function ListCardMovieSub() {
  {
    /* //TODO: Thêm dữ liệu vào đây */
  }
  return (
    <ul className="grid grid-cols-3 gap-6">
      <CardMovieSub
        href="/bookTickets/123"
        starNum={8.9}
        src="/test.jpg"
        title="Test"
      />
    </ul>
  );
}
