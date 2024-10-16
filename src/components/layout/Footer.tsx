import { about, blogs, events } from "@/constants/constHeader";
import Link from "next/link";
import React from "react";
import { Logo } from "../shared/Logo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-slate-800 mt-16 text-slate-400">
      <div className="container_custom">
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold uppercase mb-6 text-slate-200">
              Giới thiệu
            </h3>
            <ul className="space-y-3">
              {about.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="font-medium transition-all hover:text-orange-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-6 text-slate-200">
              Góc điện ảnh
            </h3>
            <ul className="space-y-3">
              {blogs.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="font-medium transition-all hover:text-orange-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-6 text-slate-200">Sự kiện</h3>
            <ul className="space-y-3">
              {events.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="font-medium transition-all hover:text-orange-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-lg:order-[-1] max-lg:col-span-4 max-md:col-span-2 max-sm:col-span-1">
            <Logo className="w-36" />
            <div className="flex gap-4 mt-4 items-center">
              <Link href="/">
                <Image
                  className="hover:scale-125 cursor-pointer transition-all"
                  alt="Facebook logo"
                  src="/fb.webp"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="/">
                <Image
                  className="hover:scale-125 cursor-pointer transition-all"
                  alt="Youtube logo"
                  src="/youtube.png"
                  width={38}
                  height={38}
                />
              </Link>
              <Link href="/">
                <Image
                  className="hover:scale-125 cursor-pointer transition-all"
                  alt="Instagram logo"
                  src="/instagram.webp"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </section>
        <hr className="my-8" />
        <section className="flex gap-4 items-center">
          <Logo className="w-44" />
          <div>
            <h3 className="text-slate-400 font-medium uppercase">
              Trường đại học Công Thương ( HUIT )
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              144 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, Tp. Hồ Chí Minh,
              Việt Nam
            </p>
            <div className="text-sm text-slate-500 flex gap-1 flex-wrap mt-2">
              <p className="flex">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="mobile"
                  width={10}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                  ></path>
                </svg>
                : 028.39.333.303 -
              </p>
              <p className="flex">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  width={10}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  ></path>
                </svg>
                : 19002224 (9:00 - 22:00) -
              </p>
              <p className="flex">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paper-plane"
                  width={10}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                  ></path>
                </svg>
                : hotro@galaxystudio.vn
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
