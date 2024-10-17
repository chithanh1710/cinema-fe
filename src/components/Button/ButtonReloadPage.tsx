"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function ButtonReloadPage() {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <Button onClick={handleReload}>
      <ReloadIcon />
    </Button>
  );
}
