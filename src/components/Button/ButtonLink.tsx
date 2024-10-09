import { cn } from "@/lib/utils";
import Link from "next/link";

export function ButtonLink({
  href,
  name,
  className,
}: {
  href: string;
  name: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "px-4 py-1 border border-gray-200 rounded-md transition-all hover:border-orange-500 text-black",
        className
      )}
      href={href}
    >
      {name}
    </Link>
  );
}
