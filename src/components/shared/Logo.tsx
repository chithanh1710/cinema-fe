import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        width={100}
        height={50}
        priority
        alt="Logo"
        src="/logo.png"
        className={cn("w-24", className)}
      />
    </Link>
  );
}
