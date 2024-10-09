import { FilterLinkMain } from "@/components/shared/FilterLinkMain";
import { filterLinkMovie } from "@/constants/constFilterMain";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="container_custom my-16">
        <FilterLinkMain filter={filterLinkMovie} />
        {children}
      </section>
    </>
  );
}
