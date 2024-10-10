"use client";
import { addDays, format } from "date-fns";
import { vi } from "date-fns/locale";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString, deleteQueryStringParams } from "@/utils/utils";
import { cn } from "@/lib/utils";

export function SliderDate({ className }: { className?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const date = searchParams.get("date");
  const daysArray = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const nextDay = addDays(today, i);
    daysArray.push({
      dayOfWeek:
        nextDay.toDateString() === new Date().toDateString()
          ? "Hôm nay"
          : format(nextDay, "EEEE", { locale: vi }),
      dayOfMonth: format(nextDay, "dd/MM"),
    });
  }
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={cn("md:w-1/2 w-[80%] mx-12 flex-shrink-0", className)}
    >
      <CarouselContent className="gap-2">
        {daysArray.map((item, i) => (
          <CarouselItem
            className="lg:basis-1/5 md:basis-1/4 sm:basis-1/5 basis-1/3"
            key={item.dayOfMonth}
            onClick={() => {
              const searchParamsFilter = deleteQueryStringParams(
                ["timeStart"],
                searchParams
              );
              const param = createQueryString(
                "date",
                item.dayOfMonth,
                searchParamsFilter
              );
              router.replace(`${pathname}?${param}`, { scroll: false });
            }}
          >
            {i < 5 ? (
              <div
                className={`text-sm cursor-pointer flex flex-col aspect-square items-center justify-center gap-1 rounded-lg ${
                  date
                    ? date === item.dayOfMonth && "bg-blue-800 text-white"
                    : i === 0 && "bg-blue-800 text-white"
                }`}
              >
                <p>{item.dayOfWeek}</p>
                <p>{item.dayOfMonth}</p>
              </div>
            ) : (
              <p className="aspect-square"></p>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
