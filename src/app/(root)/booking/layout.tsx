import { BookingProgressBar } from "@/components/shared/BookingProgressBar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-gray-100 min-h-screen -mb-16 pb-16">
      <div className="h-2 w-full"></div>
      <BookingProgressBar />
      {children}
    </section>
  );
}
