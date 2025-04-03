import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import './globals.css'

export const metadata: Metadata = {
  title: "C391 MP-4 Superhero Searcher",
  description: "CS391 MP-4 app that generates the powerstats of superheroes",
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body className={`${geistMono.className} bg-[#222831] text-white text-[calc(3px+1vw)]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
