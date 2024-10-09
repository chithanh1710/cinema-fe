"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export function ListMenu({
  title,
  listMenu,
  curIndex,
  index,
  setIndex,
}: {
  title: string;
  setIndex: Dispatch<SetStateAction<number>>;
  curIndex: number;
  index: number;
  listMenu: { href: string; title: string }[];
}) {
  return (
    <div>
      <p
        onClick={() => setIndex(index !== curIndex ? curIndex : 0)}
        className={`flex items-center gap-2 text-sm cursor-pointer ${
          index === curIndex && "text-orange-500"
        }`}
      >
        {title}
        <ChevronDown
          className={`size-4 transition-all ${
            index === curIndex ? "rotate-180" : "rotate-0"
          }`}
        />
      </p>
      <ul
        className={`ml-4 mt-1 space-y-2 ${index === curIndex ? "" : "hidden"}`}
      >
        {listMenu.map((menu) => (
          <li key={menu.title}>
            <Link href={menu.href} className="text-sm">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
