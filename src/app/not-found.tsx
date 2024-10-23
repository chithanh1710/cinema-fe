import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <Image
        fill
        className="absolute object-cover z-[-10]"
        alt="Ảnh mô tả không tìm thấy trang"
        src="/images/not-found.jpg"
      />
      <div className="container_custom flex flex-col justify-center items-center bg-black/80 p-10 shadow-md rounded-lg text-white">
        <h1 className="lg:text-8xl text-5xl font-bold text-blue-default">
          404
        </h1>
        <h2 className="lg:text-2xl sm:text-lg text-sm text-center  font-bold mt-12 text-blue-default">
          Trang này đã bị xoá hoặc không tồn tại
        </h2>
        <p className="text-sm md:block hidden mt-4 text-gray-400 text-center">
          Trang bạn đang tìm kiếm có thể đã bị di chuyển hoặc không còn tồn tại.
          Vui lòng kiểm tra lại URL hoặc sử dụng thanh tìm kiếm để tìm thông tin
          bạn cần.
        </p>
        <Button variant="default" asChild>
          <Link
            className="md:py-4 md:px-8 py-2 px-3 bg-blue-default rounded sm:rounded-lg font-semibold sm:font-bold mt-16 text-white"
            href="/"
          >
            Về trang chủ
          </Link>
        </Button>
      </div>
    </section>
  );
}
