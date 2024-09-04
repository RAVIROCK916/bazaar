"use client";

import { Roboto, Rajdhani } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "@/state/store";
import { setIsAuthenticated } from "@/state/auth/authSlice";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
      });

      if (res.status === 200) {
        store.dispatch(setIsAuthenticated(true));
      }
    };
    fetchData();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Provider store={store}>
        <body
          className={`${rajdhani.className} bg-light font-medium text-dark dark:bg-dark dark:text-light`}
        >
          <Header />
          <main className="px-32">{children}</main>
          <Toaster />
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
