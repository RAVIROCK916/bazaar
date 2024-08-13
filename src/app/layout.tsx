import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Bazaar", default: "Bazaar" },
  description: "A modern e-commerce platform. Shop now and get the best deals!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
