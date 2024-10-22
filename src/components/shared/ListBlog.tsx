import { blogsData } from "@/constants/constBlogs";
import { searchParamsProps } from "@/types/Param";
import { LikeAndView } from "./LikeAndView";
import Image from "next/image";

export function ListBlog({
  nameQuery,
  searchParams,
}: {
  nameQuery: string;
  searchParams: searchParamsProps;
}) {
  const query =
    searchParams[nameQuery] === "blog-movie" ? "blog-movie" : "comment-movie";

  const blogsToShow = blogsData.filter((b) => b.type === query).slice(0, 4);

  return (
    <ul className="grid lg:grid-cols-2 lg:grid-rows-3 mt-8 gap-8 ">
      <li className="lg:row-span-3 w-full h-full cursor-pointer rounded-md space-y-6 group">
        <Image
          alt={blogsToShow[0].title}
          width={600}
          height={400}
          src={blogsToShow[0].image}
          className="w-full aspect-[3/2] h-auto object-cover rounded-md transition-all duration-700 group-hover:scale-105"
        />
        <p className="line-clamp-2 text-xl font-semibold transition-all duration-700 group-hover:text-blue-800">
          {blogsToShow[0].title}
        </p>
        <LikeAndView />
      </li>
      {blogsToShow.slice(1).map((blog, i) => (
        <li className="w-full h-full cursor-pointer rounded-md group" key={i}>
          <Image
            alt={blog.title}
            width={300}
            height={200}
            src={blog.image}
            className="lg:w-52 w-32 aspect-[3/2] h-auto object-cover rounded-md float-left mr-6 transition-all duration-700 group-hover:scale-105"
          />

          <p className="line-clamp-2 text-lg font-semibold transition-all duration-700 group-hover:text-blue-800">
            {blog.title}
          </p>
          <LikeAndView />
        </li>
      ))}
    </ul>
  );
}
