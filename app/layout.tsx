import type { Metadata } from "next";
import Header from "@/components/Header";
import './globals.css'

export const metadata: Metadata = {
  title: "Superhero Powerstats Generator",
  description: "CS391 MP-4 app that generates powerstats of superheroes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
