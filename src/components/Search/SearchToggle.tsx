"use client";
import { SearchIcon } from "lucide-react";
import { Search } from "./Search";
import { useState } from "react";

export function SearchToggle() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative max-lg:hidden">
      <SearchIcon
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <Search
          isIcon={false}
          className="absolute bg-white shadow-xl border-[0.5px] z-50 top-6 -left-10 w-40 transition-all focus-within:w-64 focus-within:-left-24"
        />
      )}
    </div>
  );
}
