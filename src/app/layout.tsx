import type { Metadata } from "next";
import AIChat from "@/components/ai/AIChat";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Univibe Group | Digital Engineering Company",
  description:
    "Software, intelligenza artificiale, automazioni, strategia e infrastrutture digitali per aziende reali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${sora.variable}`}>
        {children}
        <AIChat />
      </body>
    </html>
  );
}
