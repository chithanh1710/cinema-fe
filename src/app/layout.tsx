import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { MenuProvider } from "@/contexts/ContextMenu";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rạp chiếu phim",
	description: "Được tạo bởi Next.js để tạo website chiếu phim",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={`${inter.className} relative overflow-x-hidden`}>
		<MenuProvider>{children}</MenuProvider>
		<Toaster/>
		</body>
		</html>
	);
}
