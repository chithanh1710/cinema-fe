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

export function QRCodeComponent({ customerId }: { customerId: number }) {
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
          onClick={() => {
            console.log(OTP);
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
              router.replace("/booking/step5");
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
