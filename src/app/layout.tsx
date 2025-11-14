import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/index.scss'

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mia Pizzeria",
  description: "Mia Pizzeria — вкус Италии рядом с тобой.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
