import type { Metadata } from "next";
import { Manrope, Roboto_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OTONMI | GitHub Security Auditor",
  description: "Autonomous Security Intelligence for GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${robotoMono.variable} antialiased bg-otonmi-black text-otonmi-light`}
      >
        {children}
      </body>
    </html>
  );
}
