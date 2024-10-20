"use client";
import { cn } from "@/lib/utils";
import { createQueryString } from "@/utils/utils";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Search({
  className,
  isIcon,
}: {
  className?: string;
  isIcon: boolean;
}) {
  const [value, setValue] = useState("");
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <div
      className={cn(
        "border border-gray-300 flex items-center p-2 rounded-md my-4",
        className
      )}
    >
      {isIcon && (
        <label htmlFor="search">
          <SearchIcon className="size-5" />
        </label>
      )}
      <input
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const param = createQueryString("q", value, searchParams);
            router.push(`/search?${param}`);
          }
        }}
        value={value}
        id="search"
        type="text"
        className="w-full outline-none px-2 !bg-transparent"
        placeholder="Tìm kiếm"
      />
    </div>
  );
}
