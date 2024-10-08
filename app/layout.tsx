import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import React from "react";
import {Toaster} from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ApLang",
  description: "The ApLang Website",
  icons: {
    icon: "/favicon.svg",  // Specify the favicon path here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Toaster position={"bottom-left"} duration={5000}/>
      <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem={true} disableTransitionOnChange={true}>
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
