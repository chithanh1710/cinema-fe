import { StarIcon, Banknote } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { CardMovieProps } from "../../types/CardMovieProps";

export function CardMovieSub({
  title,
  src,
  starNum,
  old,
  href,
}: CardMovieProps) {
  return (
    <li>
      <div className="relative cursor-pointer group">
        <Image
          alt={`Image ${title}`}
          width={200}
          height={300}
          src={src}
          className="aspect-[2/3] transition-all rounded group-hover:brightness-50"
        />
        <div className="absolute group-hover:brightness-50 top-[68%] right-0 flex gap-2 items-center px-2 bg-gradient-to-l from-black to-transparent">
          <StarIcon className="fill-current text-orange-400 size-5" />
          <span className="text-xl text-white font-semibold">{starNum}</span>
        </div>
        {old && (
          <div className="absolute group-hover:brightness-50 bottom-1 right-1 rounded-sm font-bold text-white px-1 bg-orange-400">
            T{old}
          </div>
        )}
        <Button
          asChild
          className="transition-all bg-orange-500 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex hover:bg-orange-400"
        >
          <Link href={href}>
            <Banknote />
            <span className="ml-2">Mua vé</span>
          </Link>
        </Button>
      </div>
      <Link href={href} className="font-medium leading-none mt-2">
        {title}
      </Link>
    </li>
  );
}
