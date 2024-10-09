import { CardMovieProps } from "@/types/CardMovieProps";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardMovie({ title, src, starNum, old, href }: CardMovieProps) {
  return (
    <li>
      <Link href={href} className="w-full h-full cursor-pointer">
        <div className="relative">
          <Image
            alt={`Image ${title}`}
            src={src}
            width={300}
            height={450}
            className="aspect-[2/3] w-full h-auto rounded-lg object-cover"
          />
          <div className="absolute bottom-10 right-0 flex gap-2 items-center px-2 bg-gradient-to-l from-black to-transparent">
            <StarIcon className="fill-current text-orange-400 size-5" />
            <span className="text-xl text-white font-semibold">{starNum}</span>
          </div>
          {old && (
            <div className="absolute bottom-1 right-1 rounded-sm font-bold text-white py-0.5 px-2 bg-orange-400">
              T{old}
            </div>
          )}
        </div>
        <p className="font-medium text-lg mt-3">{title}</p>
      </Link>
    </li>
  );
}
