"use client";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export function BookingProgressBar() {
  const [step, setStep] = useState(1);
  return (
    <nav className="bg-white py-6 px-3">
      <ul className="max-w-[800px] w-full mx-auto flex text-end font-medium text-[13px] max-sm:text-[10px]">
        <li
          className={`w-[20%] px-2 ${step > 1 && "text-blue-400"} ${
            step === 1 && "text-blue-800 font-semibold"
          }`}
          onClick={() => setStep(1)}
        >
          Chọn phim / Rạp / Suất
        </li>
        <li
          className={`w-[20%] px-2 ${step > 2 && "text-blue-400"} ${
            step === 2 && "text-blue-800 font-semibold"
          }`}
          onClick={() => setStep(2)}
        >
          Chọn ghế
        </li>
        <li
          className={`w-[20%] px-2 ${step > 3 && "text-blue-400"} ${
            step === 3 && "text-blue-800 font-semibold"
          }`}
          onClick={() => setStep(3)}
        >
          Chọn thức ăn
        </li>
        <li
          className={`w-[20%] px-2 ${step > 4 && "text-blue-400"} ${
            step === 4 && "text-blue-800 font-semibold"
          }`}
          onClick={() => setStep(4)}
        >
          Thanh toán
        </li>
        <li
          className={`w-[20%] px-2 ${
            step === 5 && "text-blue-800 font-semibold"
          }`}
          onClick={() => setStep(5)}
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
