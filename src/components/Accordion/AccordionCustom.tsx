import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { createQueryString, deleteQueryStringParams } from "@/utils/utils";
import Image from "next/image";
import { TicketCheck } from "lucide-react";
import { Dispatch, SetStateAction, Suspense } from "react";
import { SliderDate } from "../Slider/SliderDate";

export function AccordionCustoms({
  queryName,
  param,
  name,
  data,
  dataWithImg,
  setActiveItem,
}: {
  queryName: "cityName" | "cinemaName" | "movieId" | "timeStart";
  param: string | null;
  name: string;
  data?: string[];
  dataWithImg?: { id: number; name: string; thumbnail: string }[];
  setActiveItem: Dispatch<SetStateAction<string>>;
}) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  function onClick(value: string) {
    let searchParamsFilter;
    if (queryName === "cityName") {
      setActiveItem("cinemaName");
      searchParamsFilter = deleteQueryStringParams(
        ["cinemaName", "movieId", "timeStart"],
        searchParams
      );
    } else if (queryName === "cinemaName") {
      setActiveItem("movieId");
      searchParamsFilter = deleteQueryStringParams(
        ["movieId", "timeStart"],
        searchParams
      );
    } else if (queryName === "movieId") {
      setActiveItem("timeStart");
      searchParamsFilter = deleteQueryStringParams(["timeStart"], searchParams);
    }

    const query = createQueryString(
      queryName,
      value,
      searchParamsFilter || searchParams
    );
    router.push(`${pathName}?${query}`, { scroll: false });
  }

  return (
    <AccordionItem className="bg-white p-4 shadow-md rounded" value={queryName}>
      <AccordionTrigger className="text-xl font-semibold">
        {name} {param ? `- ${param}` : ""}
      </AccordionTrigger>
      <AccordionContent>
        {queryName === "timeStart" && (
          <div className="mb-4">
            <Suspense>
              <SliderDate className="mx-auto !w-[80%]" />
            </Suspense>
          </div>
        )}
        <div className="flex gap-4 flex-wrap">
          {data &&
            data.map((d, i) => (
              <Button
                key={d + i}
                onClick={() => onClick(d)}
                className={`${
                  param === d
                    ? "!bg-blue-800 !text-white !font-semibold border-transparent"
                    : ""
                } px-6 py-2 bg-white text-black shadow-none transition-all duration-500 hover:bg-gray-500 hover:text-white hover:font-medium !border-2 hover:border-transparent`}
              >
                {d}
              </Button>
            ))}
          {dataWithImg && (
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8 w-full">
              {dataWithImg.map((d) => (
                <div
                  onClick={() => onClick(d.id.toString())}
                  className="w-full cursor-pointer"
                  key={d.id}
                >
                  <div className={`relative aspect-[2/3] w-full h-auto`}>
                    <Image
                      alt={`Image ${d.name}`}
                      src={`/${d.thumbnail}`}
                      fill
                      className="object-cover"
                    />
                    {d.name === param && (
                      <div className="absolute w-full h-full bg-black/75 flex items-center justify-center">
                        <TicketCheck className="text-orange-500 size-16 border-4 border-orange-500 p-2 rounded-full" />
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-lg mt-3 text-black mx-4">
                    {d.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
