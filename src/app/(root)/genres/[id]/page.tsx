import Line from "@/components/shared/Line";
import { GetAllMovie, GetGenres, GetGenresById } from "@/lib/services_api";
import { paramsProps } from "@/types/Param";
import Image from "next/image";

export const revalidate = 0;

export async function generateStaticParams() {
  const posts = await GetGenres({ page: 1, pageSize: 10 });

  return posts.data.map((post) => ({ id: post.id.toString() }));
}

export default async function page({ params }: { params: paramsProps }) {
  const { id } = params;
  const genreId = Number(id);
  const genre = await GetGenresById({ id: genreId });
  const res = await GetAllMovie({
    page: 1,
    pageSize: 10,
    genreId: genre.id,
  });

  const listMovieByGenre = res.data;
  return (
    <>
      <Line className="mt-2 mb-4" />
      <section className="container_custom">
        <h2>Thể loại: {genre.name}</h2>
        <div>
          <h4 className="text-xl uppercase font-semibold border-l-4 border-blue-500 px-4 my-8">
            Có {res.totalItem} phim theo thể loại
          </h4>
          <div className="space-y-4">
            {listMovieByGenre.map((m) => (
              <div key={m.id} className="flex gap-2 md:flex-row flex-col">
                <Image
                  width={200}
                  height={150}
                  alt={m.name}
                  src={m.image}
                  className="aspect-[3/2] min-w-32 max-w-52 rounded-md object-contain"
                />
                <div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-wrap">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
