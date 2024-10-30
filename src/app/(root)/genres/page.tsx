import Line from "@/components/shared/Line";
import { Button } from "@/components/ui/button";
import { GetGenres } from "@/lib/services_api";
import Link from "next/link";

export const revalidate = 0;

export default async function page() {
  const data = await GetGenres({ page: 1, pageSize: 100 });
  const { totalItem, data: listGenres } = data;
  return (
    <>
      <Line className="my-2" />
      <section className="container_custom">
        <h2 className="font-semibold text-lg">
          Có tổng cộng {totalItem} thể loại
        </h2>
        <Line className="border-t-2 border-blue-500 my-2" />
        <ul className="ml-4 mt-6 list-decimal">
          {listGenres.map((g) => (
            <li key={g.id}>
              <Button asChild variant="link">
                <Link href={`/genres/${g.id}`}>{g.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
