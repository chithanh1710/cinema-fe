"use client";
import { useMenu } from "@/contexts/ContextMenu";
import { AlignRightIcon } from "lucide-react";

export function ToggleMenu() {
  const { setIsMenu } = useMenu();
  return (
    <AlignRightIcon
      onClick={() => setIsMenu(true)}
      className="lg:hidden block cursor-pointer"
    />
  );
}
