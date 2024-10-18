import SignInButton from "@/components/Button/SignInButton";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session?.user?.email) redirect("/login");
  return (
    <main className="container">
      <h1 className="text-center text-3xl font-bold my-8">
        Đăng Ký / Đăng Nhập - Cinema
      </h1>
      <div className="flex flex-col gap-10 mb-10 items-center">
        <SignInButton />
      </div>
      <div className="space-y-2">
        <p>
          Chào mừng bạn đến với Cinema - trang web mua vé xem phim trực tuyến
          hàng đầu! Đăng ký hoặc đăng nhập để trải nghiệm thế giới điện ảnh đa
          dạng và phong phú. Với tài khoản Cinema, bạn có thể:
        </p>
        <ul className="list-disc ml-4">
          <li>Mua vé xem phim dễ dàng với nhiều lựa chọn rạp và suất chiếu</li>
          <li>Lưu lại danh sách phim yêu thích</li>
          <li>Nhận thông báo về các bộ phim và suất chiếu mới nhất</li>
          <li>Tham gia cộng đồng yêu phim và chia sẻ cảm nhận</li>
        </ul>
        <p>
          Hãy tạo tài khoản ngay hôm nay để không bỏ lỡ những trải nghiệm tuyệt
          vời trên Cinema!
        </p>
      </div>
    </main>
  );
}
