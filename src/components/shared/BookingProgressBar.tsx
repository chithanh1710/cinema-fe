"use client";
import { Progress } from "@/components/ui/progress";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function BookingProgressBar() {
  const pathname = usePathname();
  const num = Number(pathname.split("/").at(-1)?.at(-1));
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(num);
  }, [num]);
  return (
    <nav className="bg-white py-6 px-3">
      <ul className="max-w-[800px] w-full mx-auto flex text-end font-medium text-[13px] max-sm:text-[10px]">
        <li
          className={`w-[20%] px-2 ${step > 1 && "text-blue-400"} ${
            step === 1 && "text-blue-800 font-semibold"
          }`}
        >
          Chọn phim / Rạp / Suất
        </li>
        <li
          className={`w-[20%] px-2 ${step > 2 && "text-blue-400"} ${
            step === 2 && "text-blue-800 font-semibold"
          }`}
        >
          Chọn ghế
        </li>
        <li
          className={`w-[20%] px-2 ${step > 3 && "text-blue-400"} ${
            step === 3 && "text-blue-800 font-semibold"
          }`}
        >
          Chọn thức ăn
        </li>
        <li
          className={`w-[20%] px-2 ${step > 4 && "text-blue-400"} ${
            step === 4 && "text-blue-800 font-semibold"
          }`}
        >
          Thanh toán
        </li>
        <li
          className={`w-[20%] px-2 ${
            step === 5 && "text-blue-800 font-semibold"
          }`}
        >
          Xác nhận
        </li>
      </ul>
      <Progress
        value={step * 20}
        className="max-w-[800px] w-full mx-auto mt-2 h-1"
      />
    </nav>
  );
}
