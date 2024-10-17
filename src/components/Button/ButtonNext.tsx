import React from "react";
import { ButtonLink } from "./ButtonLink";

export default function ButtonNext({ href }: { href: string }) {
  return (
    <ButtonLink
      href={href}
      name="Tiếp tục"
      className="border-none bg-orange-50 font-semibold px-4 py-2"
    />
  );
}
