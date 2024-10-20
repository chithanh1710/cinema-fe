"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Slider() {
  const data = [
    {
      id: "1",
      src: "https://cdn.galaxycine.vn/media/2024/10/9/dam-cuoi-xa-hoa---uu-dai-xa-xi-chi-co-o-galaxy-cinema-4_1728462429699.jpg",
      alt: "",
    },
    {
      id: "2",
      src: "https://cdn.galaxycine.vn/media/2024/10/18/co-dau-hao-mon-2048_1729221071482.jpg",
      alt: "",
    },
    {
      id: "3",
      src: "https://cdn.galaxycine.vn/media/2024/10/10/tee-yod-2-2048_1728531526579.jpg",
      alt: "",
    },
    {
      id: "4",
      src: "https://cdn.galaxycine.vn/media/2024/10/15/bocchi-the-rock-recap-part-2-1_1729002609324.jpg",
      alt: "",
    },
    {
      id: "5",
      src: "https://cdn.galaxycine.vn/media/2024/9/30/shopee-3_1727693002891.jpg",
      alt: "",
    },
  ];
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
      {data.map((item) => (
        <SwiperSlide
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
