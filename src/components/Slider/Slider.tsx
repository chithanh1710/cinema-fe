"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SkeletonSlider } from "../Skeleton/SkeletonSlider";

const testData = [
  {
    id: "1",
    href: "/",
    src: "/1.jpg",
    alt: "",
  },
  {
    id: "2",
    href: "/",
    src: "/2.jpg",
    alt: "",
  },
  {
    id: "3",
    href: "/",
    src: "/3.jpg",
    alt: "",
  },
  {
    id: "4",
    href: "/",
    src: "/4.jpg",
    alt: "",
  },
  {
    id: "5",
    href: "/",
    src: "/5.jpg",
    alt: "",
  },
  {
    id: "6",
    href: "/",
    src: "/6.jpg",
    alt: "",
  },
];

export function Slider() {
  const router = useRouter();
  const [slides, setSlides] = useState(testData);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchSlides() {
      try {
        setIsLoading(true);
        // TODO: Fetch dữ liệu
        const data = await fetch("").then((res) => res.json());
        if (!data) throw new Error("Not found data");
        setSlides(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
  });

  if (isLoading) return <SkeletonSlider />;

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      pagination={{
        clickable: true,
      }}
      navigation
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      className="mySwiper cursor-pointer"
    >
      {slides.map((item) => (
        <SwiperSlide
          onClick={() => {
            router.push(item.href);
          }}
          className="w-full h-full aspect-[1024/341] max-md:aspect-[3/2]"
          key={item.id}
        >
          <Image
            alt={item.alt}
            src={item.src}
            fill
            priority
            sizes="100vw"
            className="object-fill"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
