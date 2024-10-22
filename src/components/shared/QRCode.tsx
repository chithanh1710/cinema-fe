"use client";
import { getRandomInRange } from "@/utils/utils";
import { QRCodeCanvas } from "qrcode.react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function QRCodeComponent({
  customerId,
  selectedSeatId,
}: {
  customerId: number;
  selectedSeatId: number;
}) {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const randomNumber = useMemo(
    () =>
      `${getRandomInRange(0, 9)}${getRandomInRange(0, 9)}${getRandomInRange(
        0,
        9
      )}${getRandomInRange(0, 9)}${getRandomInRange(0, 9)}${getRandomInRange(
        0,
        9
      )}`,
    []
  );

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-10 h-full">
      <h3>Quét mã QR để thanh toán</h3>
      <QRCodeCanvas value={randomNumber} />
      <InputOTP
        onChange={(value) => {
          setOTP(value);
        }}
        maxLength={6}
      >
        <InputOTPGroup>
          <InputOTPSlot className="bg-gray-200 border-gray-500" index={0} />
          <InputOTPSlot className="bg-gray-200 border-gray-500" index={1} />
          <InputOTPSlot className="bg-gray-200 border-gray-500" index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot className="bg-gray-200 border-gray-500" index={3} />
          <InputOTPSlot className="bg-gray-200 border-gray-500" index={4} />
          <InputOTPSlot className="bg-gray-200 border-gray-500" index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex gap-4">
        <Button
          className="bg-red-400"
          onClick={async () => {
            await handleReset();
            await toast.promise(
              fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/transactions/${customerId}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ),
              {
                error: "Có lỗi xảy ra khi thanh toán",
                loading: "Đang thực hiện huỷ thanh toán",
                success: "Huỷ thanh toán thành công",
              }
            );
            router.replace("/booking/step1");
          }}
        >
          Huỷ
        </Button>
        <Button
          className="bg-green-500"
          onClick={async () => {
            if (OTP === randomNumber) {
              await toast.promise(
                fetch(
                  `${process.env.NEXT_PUBLIC_API_URL}/transactions/${customerId}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                ),
                {
                  error: "Có lỗi xảy ra khi thanh toán",
                  loading: "Đang thực hiện thanh toán",
                  success: "Thanh toán thành công",
                }
              );
              router.replace("/account/history");
            } else {
              toast.error("Mã OTP không đúng");
            }
          }}
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
}
