import type { Metadata } from "next";
import {  Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

 

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Interview Prep",
  description: "An AI-Powered for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.className} antialiased pattern dark`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
