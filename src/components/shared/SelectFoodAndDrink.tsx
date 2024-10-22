"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { formatMoney } from "@/utils/utils";
import { useFoodDrink } from "@/contexts/ContextFoodDrink";
import { useRouter } from "next/navigation";

export default function SelectFoodAndDrink({
  quantity,
  id,
  price,
}: {
  quantity: number;
  id: number;
  price: number;
}) {
  const { listCart, setListCart } = useFoodDrink();
  const [num, setNum] = useState(0);

  useEffect(() => {
    const updatedCart = [...listCart];
    const itemIndex = updatedCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity = num;
    } else {
      updatedCart.push({ id, price, quantity: num });
    }

    setListCart(updatedCart);
  }, [num]);

  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={() => setNum((prev) => (prev - 1 <= 0 ? 0 : prev - 1))}
        variant="default"
        className="bg-red-200 text-white font-bold"
      >
        -
      </Button>
      <p>{num}</p>
      <Button
        onClick={() =>
          setNum((prev) => (prev + 1 >= quantity ? quantity : prev + 1))
        }
        variant="default"
        className="bg-green-400 text-white font-bold"
      >
        +
      </Button>
    </div>
  );
}

export function TotalPrice({ totalPrice }: { totalPrice: number }) {
  const { listCart } = useFoodDrink();
  const totalFoodDrink = listCart.reduce(
    (total, cur) => (total += cur.quantity * cur.price),
    0
  );

  return (
    <p className="font-semibold">
      Tổng cộng: <span>{formatMoney(totalPrice + totalFoodDrink)}</span>
    </p>
  );
}

export function ButtonSummitFoodAndDrink({
  customerId,
  selectedSeatId,
  showTimeId,
}: {
  selectedSeatId: number;
  customerId: number;

  showTimeId: number;
}) {
  const router = useRouter();
  const { listCart } = useFoodDrink();

  const handleSubmit = async () => {
    const body = {
      customerId,
      selectedSeatId,
      listCart,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}AddFoodDrinkTransaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi thêm thực phẩm và đồ uống.");
      }

      const result = await response.json();

      console.log(result);

      router.replace(`/booking/step4?idShowTime=${showTimeId}`);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <Button
      onClick={handleSubmit} // Gọi hàm handleSubmit khi nút được nhấn
      className="border-none bg-orange-50 font-semibold px-4 py-2 text-black hover:bg-white"
    >
      Tiếp tục
    </Button>
  );
}

export function ResetFoodDrinkButton({
  customerId,
  selectedSeatId,
}: {
  selectedSeatId: number;
  customerId: number;
}) {
  const router = useRouter();
  const handleReset = async () => {
    const body = {
      customerId,
      selectedSeatId,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}ResetFoodDrinkTransaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi hoàn tác giao dịch.");
      }

      const data = await response.json();
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      variant="secondary"
      onClick={handleReset}
      className="bg-red-500 text-white hover:bg-red-600"
    >
      Chọn lại
    </Button>
  );
}
