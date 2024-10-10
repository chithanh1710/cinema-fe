"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { blogs, events } from "@/constants/constHeader";
import Image from "next/image";
import { ListCardMovieSub } from "../CardMovie/ListCardMovieSub";
import { GetMovieByType } from "@/lib/services_api";
import { Movie } from "@/types/RootMovies";

export default function NavHeader() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<Movie[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const dataTmp = await GetMovieByType();
        if (!dataTmp) {
          throw new Error("No data found.");
        }
        setData(dataTmp);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return null;

  const dataUpcoming = data.filter((d) => d.type === "SẮP CHIẾU");
  const dataShowing = data.filter((d) => d.type === "ĐANG CHIẾU");

  return (
    <NavigationMenu className="max-lg:hidden z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/booking">
              <Image
                width={100}
                height={40}
                alt="Button Ticket"
                src="/btn-ticket.webp"
                className="w-28"
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="!ml-6">
          <NavigationMenuTrigger>Phim</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-4 p-4 w-[500px]">
              <Link
                href="movie-showing"
                className="uppercase border-l-[6px] pl-2 font-light border-blue-800"
              >
                Phim đang chiếu
              </Link>
              <ListCardMovieSub data={dataShowing} />
              <Link
                href="movie-upcoming"
                className="uppercase border-l-[6px] pl-2 font-light border-blue-800"
              >
                Phim sắp chiếu
              </Link>
              <ListCardMovieSub data={dataUpcoming} />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Góc điện ảnh</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 grid-cols-2 w-[600px]">
              {blogs.map((blog) => (
                <ListItem key={blog.title} title={blog.title} href={blog.href}>
                  {blog.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sự kiện</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4">
              {events.map((blog) => (
                <ListItem key={blog.title} title={blog.title} href={blog.href}>
                  {blog.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/booking"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <p className="text-sm font-medium leading-none">Rạp/Giá vé</p>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || ""}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
