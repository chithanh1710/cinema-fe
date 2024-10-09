"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createQueryString } from "@/utils/utils";
import { useEffect, useState } from "react";
import { GetMovieShowtimes } from "@/lib/services_api";
import { id } from "date-fns/locale";
import router from "next/router";

interface CinemaData {
  city_name: string;
  cinema_name: string;
}

interface CityGroup {
  cityName: string;
  cinemas: string[];
}

export function FilterSelectTheater({ id }: { id: string }) {
  const [cityAndCinemas, setCityAndCinemas] = useState<CityGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const cityName = searchParams.get("cityName") || "";
  const cinemaName = searchParams.get("cinemaName") || "";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await GetMovieShowtimes(Number(id));
        const cityMap = new Map<string, string[]>();

        data.data.forEach((cur: CinemaData) => {
          if (cityMap.has(cur.city_name)) {
            cityMap.get(cur.city_name)!.push(cur.cinema_name);
          } else {
            cityMap.set(cur.city_name, [cur.cinema_name]);
          }
        });

        // Chuyển đổi từ Map sang mảng kết quả mong muốn
        const dataFormat: CityGroup[] = Array.from(
          cityMap,
          ([cityName, cinemas]) => ({
            cityName,
            cinemas,
          })
        );

        setCityAndCinemas(dataFormat);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  function handleChangeValue(value: string, type: string) {
    const param = createQueryString(type, value, searchParams);
    router.replace(`${pathname}?${param}`, { scroll: false });
  }

  if (loading)
    return (
      <div className="flex gap-2 w-full">
        <Select>
          <SelectTrigger className="w-full border shadow-none !ring-0 !outline-none !ring-offset-0 cursor-not-allowed">
            <SelectValue placeholder="Loading" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="w-full border shadow-none !ring-0 !outline-none !ring-offset-0 cursor-not-allowed">
            <SelectValue placeholder="Loading" />
          </SelectTrigger>
        </Select>
      </div>
    );

  return (
    <div className="flex gap-2 w-full">
      <Select
        value={cityName}
        onValueChange={(value) => handleChangeValue(value, "cityName")}
      >
        <SelectTrigger className="w-full border shadow-none !ring-0 !outline-none !ring-offset-0">
          <SelectValue placeholder="Toàn quốc" defaultValue="Toàn quốc" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Toàn quốc">Toàn quốc</SelectItem>
          {cityAndCinemas.map((item) => (
            <SelectItem key={item.cityName} value={item.cityName}>
              {item.cityName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={cinemaName}
        onValueChange={(value) => handleChangeValue(value, "cinemaName")}
      >
        <SelectTrigger className="w-full border shadow-none !ring-0 !outline-none !ring-offset-0">
          <SelectValue placeholder="Tất cả rạp" defaultValue="Tất cả rạp" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Tất cả rạp">Tất cả rạp</SelectItem>
          {cityAndCinemas.map((item) => {
            if (item.cityName === cityName || cityName === "Toàn quốc") {
              return item.cinemas.map((str) => (
                <SelectItem key={str} value={str}>
                  {str}
                </SelectItem>
              ));
            }
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
