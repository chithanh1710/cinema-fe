"use client";
import styles from "@/styles/filterMain.module.css";
import { FilterMainLinkProps } from "@/types/FilterMainProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FilterLinkMain({ filter }: { filter: FilterMainLinkProps }) {
  const pathName = usePathname();
  return (
    <div className="flex md:gap-10 gap-6">
      <h2 className="border-l-[4px] border-l-blue-800 pl-2 text-xl uppercase font-semibold text-gray-600 max-sm:hidden">
        {filter.title}
      </h2>
      {filter.filterList.map((item) => (
        <Link
          key={item.value}
          href={`${item.value}`}
          className={`${styles.h2} ${
            pathName.includes(item.value) ? "text-blue-800" : "text-gray-400"
          } `}
        >
          {item.name}
          <div
            className={`${styles.div} ${
              pathName.includes(item.value)
                ? "w-6 bg-blue-800"
                : "w-0 bg-transparent"
            }`}
          ></div>
        </Link>
      ))}
    </div>
  );
}
