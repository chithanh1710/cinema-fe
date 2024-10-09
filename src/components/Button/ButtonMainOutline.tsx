import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function ButtonMainOutline({ href }: { href: string }) {
  return (
    <Button
      asChild
      variant="outline"
      className="my-8 border-orange-400 text-orange-400 text-sm mx-auto max-w-52 flex hover:bg-orange-400 hover:text-white h-12 px-8"
    >
      <Link href={href}>
        <span>Xem thêm</span>
        <ChevronRight />
      </Link>
    </Button>
  );
}
