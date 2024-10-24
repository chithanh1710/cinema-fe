import { LikeAndView } from "@/components/shared/LikeAndView";
import Line from "@/components/shared/Line";
import { GetActorsById, GetAllMovie, GetDirectors } from "@/lib/services_api";
import { paramsProps } from "@/types/Param";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await GetDirectors({ page: 1, pageSize: 6 });

  return posts.data.map((post) => ({ id: post.id.toString() }));
}

export default async function page({ params }: { params: paramsProps }) {
  const { id } = params;
  const actorId = Number(id);
  const [actor, res] = await Promise.all([
    GetActorsById({ id: actorId }),
    GetAllMovie({
      page: 1,
      pageSize: 10,
      actorId: actorId,
    }),
  ]);

  const listMovieByActor = res.data;

  return (
    <>
      <Line className="mt-2 mb-4" />
      <section className="container_custom">
        <div className="flex gap-4 md:flex-row flex-col-reverse">
          <Image
            alt=""
            src="/images/placeholder.jpeg"
            width={300}
            height={500}
            className="aspect-[2/3] min-w-[80px] max-w-[300px] w-full h-auto rounded-md"
          />
          <div className="space-y-3">
            <div className="text-sm font-light text-gray-500">
              <Link href="/">Trang chủ</Link>
              {" / "}
              <Link href="/actors">Diễn viên</Link>
              {" / "}
              <span className="font-medium text-gray-600">{actor.name}</span>
            </div>
            <h3 className="font-bold text-2xl tracking-wide">{actor.name}</h3>
            <LikeAndView />
            <p className="text-sm">Đang cập nhật</p>
            <div className="!mt-6 space-y-2 text-sm text-gray-500 font-medium">
              <p>
                Ngày sinh: <span className="text-black">Đang cập nhật</span>
              </p>
              <p>
                Chiều cao: <span className="text-black">Đang cập nhật</span>
              </p>
              <p>
                Quốc tịch: <span className="text-black">Đang cập nhật</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl uppercase font-semibold border-l-4 border-blue-500 px-4 my-8">
            Hình ảnh
          </h4>
          <p>Đang cập nhật</p>
        </div>
        <div>
          <h4 className="text-xl uppercase font-semibold border-l-4 border-blue-500 px-4 my-8">
            Phim đã tham gia
          </h4>
          <div className="space-y-4">
            {listMovieByActor.map((m) => (
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
        <div>
          <h4 className="text-xl uppercase font-semibold border-l-4 border-blue-500 px-4 my-8">
            Tiểu sử
          </h4>
          <p>Đang cập nhật</p>
        </div>
      </section>
    </>
  );
}
