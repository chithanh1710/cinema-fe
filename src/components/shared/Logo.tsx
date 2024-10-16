import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        width={512}
        height={304}
        priority
        alt="Logo"
        src="/logo LXT.png"
        className={cn("w-32", className)}
      />
    </Link>
  );
}
