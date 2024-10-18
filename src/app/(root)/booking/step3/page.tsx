import ButtonBack from "@/components/Button/ButtonBack";
import SelectFoodAndDrink, {
  ButtonSummitFoodAndDrink,
  TotalPrice,
} from "@/components/shared/SelectFoodAndDrink";
import { FoodDrinkProvider } from "@/contexts/ContextFoodDrink";
import { auth } from "@/lib/auth";
import {
  GetCustomer,
  GetFoodAndDrink,
  GetSeatsByShowtime,
} from "@/lib/services_api";
import { searchParamsProps } from "@/types/Param";
import { formatMoney } from "@/utils/utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

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
  if (!session?.user?.id) redirect("/login");

  const { user } = session;

  const selectedSeat = seats.filter(
    (s) => s.status === "ĐANG GIỮ" && s.reservedBy === user.id
  );

  const selectedSeatId = selectedSeat.map((s) => s.id_seat)[0];

  let totalPrice = selectedSeat.reduce((total, cur) => {
    if (cur.genre_seats === "VIP") {
      total += 100;
    } else if (cur.genre_seats === "Ghế đôi") {
      total += 180;
    } else {
      total += 80;
    }
    return total;
  }, 0);

  const data = await GetFoodAndDrink();
  const foodAndDrink = data.data;
  return (
    <div className="container_custom">
      <FoodDrinkProvider>
        <div className="grid grid-cols-4 gap-4 p-4">
          {foodAndDrink.map((fd) => (
            <div
              className="bg-white rounded-lg flex flex-col items-center gap-2 p-4"
              key={fd.id}
            >
              <Image
                alt=""
                src={fd.image_url}
                width={160}
                height={160}
                className="object-contain aspect-square"
              />
              <p>{fd.name}</p>
              <p>
                Giá:{" "}
                <span className="font-bold text-red-500">
                  {formatMoney(fd.price)}
                </span>
              </p>
              <SelectFoodAndDrink
                id={fd.id}
                quantity={fd.stock_quantity}
                price={fd.price}
              />
            </div>
          ))}
        </div>
        <div className="fixed w-full left-0 bottom-0 bg-orange-500 text-white rounded-t-lg">
          <div className="container_custom flex justify-between items-center py-2">
            <TotalPrice totalPrice={totalPrice} />
            <div className="space-x-4">
              <ButtonBack />
              <ButtonSummitFoodAndDrink
                showTimeId={showtimeId}
                customerId={user.id}
                selectedSeatId={selectedSeatId}
              />
            </div>
          </div>
        </div>
      </FoodDrinkProvider>
    </div>
  );
}
