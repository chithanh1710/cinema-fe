"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SliderSub() {
  const data = [
    {
      id: "1",
      src: "https://cdn.galaxycine.vn/media/2024/10/9/dam-cuoi-xa-hoa---uu-dai-xa-xi-chi-co-o-galaxy-cinema-4_1728462429699.jpg",
      alt: "Đám Cưới Xa Hoa - Ưu Đãi Xa Xỉ Chỉ Có Ở Galaxy Cinema",
    },
    {
      id: "2",
      src: "https://cdn.galaxycine.vn/media/2023/11/23/giaveu22-digital-1800x1200_1700731546949.jpg",
      alt: "Giá Vé U22  - Chỉ Từ 45k",
    },
    {
      id: "3",
      src: "https://cdn.galaxycine.vn/media/2023/5/23/quy-dinh-do-tuoi-digital-1350x900_1684835377244.jpg",
      alt: "Tiêu Chí Phân Loại Phim Theo Lứa Tuổi",
    },
    {
      id: "4",
      src: "https://cdn.galaxycine.vn/media/2024/9/30/shopee-2_1727692944053.jpg",
      alt: "Voucher ShopeePay Giảm 10K Dành Tặng Các Stars!",
    },
    {
      id: "5",
      src: "https://cdn.galaxycine.vn/media/2024/1/19/1350x900_1705628944220.jpg",
      alt: "Mưa Quà Tặng Cho Thành Viên Galaxy Cinema 2024",
    },
    {
      id: "6",
      src: "https://cdn.galaxycine.vn/media/2024/4/16/750_1713257524954.jpg",
      alt: "Happy Day - Vé Chỉ Từ 50K",
    },
  ];

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
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      loop
      className="mySwiper cursor-pointer"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            alt={item.alt}
            src={item.src}
            width={500}
            height={400}
            className="h-full aspect-[3/2] object-fill mx-auto"
          />
          <p className="text-sm font-semibold text-center mt-2 px-2">
            {item.alt}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
