import type { Metadata } from "next";
import { Allura, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Svitlana Design — UI/UX Designer",
  description:
    "I design interfaces for websites and web products, including dashboards and admin panels for B2B SaaS, and use AI throughout my design process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${allura.variable}`}>
      <body>{children}</body>
    </html>
  );
}
