import { searchParamsProps } from "@/types/Param";
import Link from "next/link";
import { LikeAndView } from "./LikeAndView";
import Image from "next/image";

export async function ListBlog({
  nameQuery,
  searchParams,
}: {
  nameQuery: string;
  searchParams: searchParamsProps;
}) {
  //TODO: Thêm dữ liệu vào đây chỉ lấy 4 dữ liệu
  const query = searchParams[nameQuery];
  // const listMovie = await fetch("");

  return (
    <ul className="grid lg:grid-cols-2 lg:grid-rows-3 mt-8 gap-8 ">
      <li className="lg:row-span-3">
        <Link
          href=""
          className="w-full h-full cursor-pointer rounded-md space-y-6 group"
        >
          <Image
            alt=""
            width={600}
            height={400}
            src="/1.jpg"
            className="w-full aspect-[3/2] h-auto object-cover rounded-md transition-all duration-700 group-hover:scale-105"
          />
          <Link
            href=""
            className="line-clamp-2 text-xl font-semibold transition-all duration-700 group-hover:text-blue-800"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            illo a sint distinctio quod in
          </Link>
        </Link>
        <LikeAndView />
      </li>
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i}>
          <Link
            href=""
            className="w-full h-full cursor-pointer rounded-md group"
          >
            <Image
              alt=""
              width={300}
              height={200}
              src="/1.jpg"
              className="lg:w-52 w-32 aspect-[3/2] h-auto object-cover rounded-md float-left mr-6 transition-all duration-700 group-hover:scale-105"
            />

            <Link
              href=""
              className="line-clamp-2 text-lg font-semibold transition-all duration-700 group-hover:text-blue-800"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis magnam aut
            </Link>
          </Link>
          <LikeAndView />
        </li>
      ))}
    </ul>
  );
}
