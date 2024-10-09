"use client";
import { blogs, events } from "@/constants/constHeader";
import { useMenu } from "@/contexts/ContextMenu";
import { X } from "lucide-react";
import { ListMenu } from "./ListMenu";
import { Suspense, useState } from "react";
import Link from "next/link";
import { Search } from "../Search/Search";

export default function Menu() {
  const { isMenu, setIsMenu } = useMenu();
  const [index, setIndex] = useState(0);
  const movieList = [
    {
      href: "movie-showing",
      title: "Phim đang chiếu",
    },
    {
      href: "movie-upcoming",
      title: "Phim sắp chiếu",
    },
  ];
  return (
    <>
      <aside
        className={`lg:hidden fixed z-[9999] pt-6 px_default top-0 right-0 shadow-lg bg-white w-[287px] md:w-[346px] h-screen duration-500 transition-all ${
          isMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <X
          onClick={() => setIsMenu(false)}
          className="ml-auto cursor-pointer size-7 text-gray-400"
        />
        <Suspense>
          <Search isIcon={true} />
        </Suspense>
        <div className="space-y-4">
          <ListMenu
            curIndex={1}
            setIndex={setIndex}
            index={index}
            title="Phim"
            listMenu={movieList}
          />
          <ListMenu
            curIndex={2}
            setIndex={setIndex}
            index={index}
            title="Góc Điện Ảnh"
            listMenu={blogs}
          />
          <ListMenu
            curIndex={3}
            setIndex={setIndex}
            index={index}
            title="Sự Kiện"
            listMenu={events}
          />
          <div>
            <Link href="/bookTickets" className="text-sm">
              Rạp/Giá vé
            </Link>
          </div>
        </div>
      </aside>
      {isMenu && (
        <div
          onClick={() => setIsMenu(false)}
          className="w-full h-full fixed top-0 left-0 z-[9998] bg-black/50 lg:hidden"
        ></div>
      )}
    </>
  );
}
