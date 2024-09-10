import type { Metadata } from "next";
import { Roboto, Rajdhani } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Logo from "@/components/Logo";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login / Register",
  description: "A modern e-commerce platform. Shop now and get the best deals!",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${rajdhani.className} bg-light text-dark`}>
        <main className="flex min-h-screen *:flex-1">
          <Image
            src="/Hero.png"
            alt="logo"
            width={768}
            height={100}
            className="hidden sm:block"
          />
          <div className="flex flex-col px-8 *:flex *:items-center sm:px-16">
            <h5 className="mt-8 h-16">
              <Logo />
            </h5>
            <div className="flex-1 flex-col items-center justify-center gap-8">
              {children}
            </div>
            <span className="my-auto h-16 text-xs">© 2024 Bazaar</span>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
