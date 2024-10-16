import Link from "next/link";
import { User } from "lucide-react";
import { ToggleMenu } from "../Menu/ToggleMenu";
import { SearchToggle } from "../Search/SearchToggle";
import { Suspense } from "react";
import { auth } from "@/lib/auth";

export default async function NavUtils() {
  const session = await auth();
  const checkUser = !!session?.user;
  return (
    <nav className="flex sm:gap-4 gap-2 items-center text-gray-400">
      <Suspense>
        <SearchToggle />
      </Suspense>
      <Link
        className="flex gap-1 items-center"
        href={checkUser ? "/account" : "/login"}
      >
        {checkUser && session.user?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session.user.image}
            alt={`Image user ${session.user.name}`}
            width={26}
            height={26}
            className="rounded-full"
            referrerPolicy="no-referrer"
          />
        )}
        {!checkUser && (
          <>
            <User className="lg:hidden" />
            <span className="text-sm">Đăng nhập</span>
          </>
        )}
      </Link>
      <ToggleMenu />
    </nav>
  );
}
