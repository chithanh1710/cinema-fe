import Menu from "@/components/Menu/Menu";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
