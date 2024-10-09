"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

export function SliderSub() {
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
      modules={[Autoplay]}
      slidesPerView={1}
      centeredSlides
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      loop
      className="mySwiper cursor-pointer"
    >
      {slides.map((item) => (
        <SwiperSlide
          onClick={() => {
            router.push(item.href);
          }}
          key={item.id}
        >
          <Image
            alt={item.alt}
            src={item.src}
            width={500}
            height={400}
            className="h-full aspect-[3/2] object-fill mx-auto"
          />
          <p className="text-sm font-semibold text-center mt-2 px-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quos
            consectetur
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
