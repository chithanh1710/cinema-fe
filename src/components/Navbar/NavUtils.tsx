import Link from "next/link";
import { SearchIcon, User } from "lucide-react";
import { ToggleMenu } from "../Menu/ToggleMenu";
import { SearchToggle } from "../Search/SearchToggle";
import { Suspense } from "react";

export default function NavUtils() {
  return (
    <nav className="flex sm:gap-4 gap-2 items-center text-gray-400">
      <Suspense>
        <SearchToggle />
      </Suspense>
      <Link className="flex gap-1 items-center" href="/login">
        <User className="lg:hidden" />
        <span className="text-sm">Đăng nhập</span>
      </Link>
      <ToggleMenu />
    </nav>
  );
}
