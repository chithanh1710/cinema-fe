"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "@/styles/filterMain.module.css";
import { useState } from "react";
import { createQueryString } from "@/utils/utils";
import { FilterMainProps } from "@/types/FilterMainProps";

export function FilterMain({ nameQuery, title, filterList }: FilterMainProps) {
  const [isClick, setIsClick] = useState(filterList[0].value);
  const searchPrams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(type: string) {
    setIsClick(type);
    const param = createQueryString(nameQuery, type, searchPrams);
    router.replace(`${pathname}?${param}`, { scroll: false });
  }

  return (
    <div className="flex md:gap-10 gap-6">
      <h2 className="border-l-[4px] border-l-blue-800 pl-2 text-xl uppercase font-semibold text-gray-600 max-sm:hidden">
        {title}
      </h2>
      {filterList.map((item) => (
        <h3
          key={item.value}
          onClick={() => handleClick(item.value)}
          className={`${styles.h2} ${
            isClick === item.value ? "text-blue-800" : "text-gray-400"
          } `}
        >
          {item.name}
          <div
            className={`${styles.div} ${
              isClick === item.value ? "w-6 bg-blue-800" : "w-0 bg-transparent"
            }`}
          ></div>
        </h3>
      ))}
    </div>
  );
}
