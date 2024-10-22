import { cn } from "@/lib/utils";

export default function Line({ className }: { className?: string }) {
  return (
    <hr className={cn("border-t-[6px] my-16 border-gray-100", className)} />
  );
}
