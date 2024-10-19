"use client";
import Image from "next/image";
import styles from "@/styles/heroPageId.module.css";
import { useState } from "react";
import { getYouTubeEmbedLink } from "@/utils/utils";
import { cn } from "@/lib/utils";
import { MovieDetails } from "@/types/RootMovies";
export function HeroPageId({
  className,
  detail,
}: {
  className?: string;
  detail: MovieDetails;
}) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const embedLink = getYouTubeEmbedLink(detail.trailer);
  return (
    <>
      <section
        className={cn(
          "relative w-full xl:h-[660px] lg:h-[560px] sm:h-[460px] h-[260px] bg-black mt-8",
          className
        )}
      >
        <Image
          alt={`Image ${detail.name}`}
          src={`${detail.image}`}
          width={700}
          height={500}
          className="h-full w-full sm:w-auto sm:aspect-[3/2] object-fill mx-auto opacity-80"
        />
        <Image
          alt="Button play movie"
          src="/button-play.png"
          width={700}
          height={500}
          className="lg:size-16 md:size-12 size-8 top-1/2 z-10 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute cursor-pointer"
          onClick={() => setIsOpenTrailer(true)}
        />
        <div className={styles.div}></div>
      </section>
      {isOpenTrailer && (
        <div
          onClick={() => setIsOpenTrailer(false)}
          className="w-screen h-full bg-black/70 z-[9999] fixed top-0 left-0 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-[80%] aspect-video flex items-center justify-center"
          >
            <iframe
              src={embedLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
