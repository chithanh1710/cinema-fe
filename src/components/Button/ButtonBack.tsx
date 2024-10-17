"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function ButtonBack() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} className="border-none font-semibold">
      Quay lại
    </Button>
  );
}
