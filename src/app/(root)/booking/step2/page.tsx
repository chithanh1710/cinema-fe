import { ButtonLink } from "@/components/Button/ButtonLink";
import { SeatMap } from "@/components/shared/SeatMap";
import { auth } from "@/lib/auth";
import { GetCustomer, GetSeatsByShowtime } from "@/lib/services_api";
import { Seat } from "@/types/GetSeatsByShowtime";
import { searchParamsProps } from "@/types/Param";
import { formatMoney } from "@/utils/utils";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const id = searchParams.idShowTime;
  if (!id) return redirect("/booking/step1");
  const showtimeId = Number(id);
  const seats = await GetSeatsByShowtime(showtimeId);
  const session = await auth();
  if (!session?.user?.email) redirect("/login");
  const user = await GetCustomer(session?.user?.email);

  if (!user) redirect("/login");

  const selectedSeat = seats.filter(
    (s) => s.status === "ĐANG GIỮ" && s.reservedBy === user.id
  );

  const selectedSeatId = selectedSeat.map((s) => s.id_seat);

  const totalPrice = selectedSeat.reduce((total, cur) => {
    if (cur.genre_seats === "VIP") {
      total += 100;
    } else if (cur.genre_seats === "Ghế đôi") {
      total += 180;
    } else {
      total += 80;
    }
    return total;
  }, 0);
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Chọn ghế ngồi</h1>
      <div className="flex flex-row max-lg:flex-col-reverse max-lg:gap-6">
        <Suspense>
          <SeatMap dataSeats={seats} user={user} showTimeId={showtimeId} />
        </Suspense>
        <aside className="text-white lg:space-y-4 w-[260px] max-lg:flex max-lg:w-full max-lg:flex-wrap gap-4">
          <div className="flex gap-3 items-center">
            <div className="lg:size-10 size-6 bg-yellow-500 rounded-lg flex items-center justify-center">
              X
            </div>
            <p className="text-black lg:text-sm lg:font-semibold text-xs font-medium">
              GHẾ VIP
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="lg:size-10 size-6 bg-green-500 rounded-lg flex items-center justify-center">
              X
            </div>
            <p className="text-black lg:text-sm lg:font-semibold text-xs font-medium">
              GHẾ THƯỜNG
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="lg:size-10 size-6 bg-pink-500 rounded-lg flex items-center justify-center">
              X
            </div>
            <p className="text-black lg:text-sm lg:font-semibold text-xs font-medium">
              GHẾ ĐÔI
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="lg:size-10 size-6 bg-red-500 opacity-80 rounded-lg flex items-center justify-center">
              X
            </div>
            <p className="text-black lg:text-sm lg:font-semibold text-xs font-medium">
              GHẾ MÌNH ĐANG GIỮ
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="lg:size-10 size-6 cursor-not-allowed bg-red-500 opacity-30 rounded-lg flex items-center justify-center">
              X
            </div>
            <p className="text-black lg:text-sm lg:font-semibold text-xs font-medium">
              GHẾ NGƯỜI KHÁC GIỮ
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="lg:size-10 size-6 bg-gray-300 rounded-lg flex items-center justify-center">
              X
            </div>
            <p className="text-black lg:text-sm lg:font-semibold text-xs font-medium">
              GHẾ ĐÃ ĐẶT
            </p>
          </div>
        </aside>
      </div>
      {totalPrice !== 0 && selectedSeatId.length > 0 && (
        <div className="fixed w-full left-0 bottom-0 bg-orange-500 text-white rounded-t-lg">
          <div className="container_custom flex justify-between items-center py-2">
            <p className="font-semibold">
              Tổng cộng: <span>{formatMoney(totalPrice)}</span>
            </p>
            <div className="space-x-4">
              <ButtonLink
                href={`/`}
                name="Quay lại"
                className="border-none font-semibold"
              />
              <ButtonLink
                href={`/booking/step3`}
                name="Tiếp tục"
                className="border-none bg-orange-50 font-semibold"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
