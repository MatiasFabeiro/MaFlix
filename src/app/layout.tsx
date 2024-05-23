import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";
import NavBar from "./ui/home/navbar";

export const metadata: Metadata = {
  title: "MaFlix",
  description: "Watch movies online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        
        {children}
      
      </body>
    </html>
  );
}
