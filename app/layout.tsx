import type { Metadata } from "next";
import {Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soban Ali — Developer & Model",
  description: "Full-stack developer and model. Building clean digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${open_sans.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
