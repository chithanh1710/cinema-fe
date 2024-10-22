"use client";
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
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import NavMovie from "./NavMovie";

export default function NavHeader() {
  return (
    <NavigationMenu className="max-lg:hidden z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/booking/step1">
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
        <NavMovie />
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

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, href, ...props }, ref) => {
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
  }
);
ListItem.displayName = "ListItem";
