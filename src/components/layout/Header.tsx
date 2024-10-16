import NavHeader from "../Navbar/NavHeader";
import NavUtils from "../Navbar/NavUtils";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../shared/Logo";

export default async function Header() {
  return (
    <header className="container_custom flex justify-between items-center lg:pt-3 pt-5 pb-2">
      <div className="flex sm:gap-10 gap-6 items-center">
        <Logo />
        <Link href="/booking/step1" className="lg:hidden block">
          <Image
            width={100}
            height={40}
            priority
            alt="Button Ticket"
            src="/btn-ticket.webp"
            className="w-24"
          />
        </Link>
      </div>
      <NavHeader />
      <NavUtils />
    </header>
  );
}
