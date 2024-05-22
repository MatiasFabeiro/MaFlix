import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAFlix",
  description: "Watch movies online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
