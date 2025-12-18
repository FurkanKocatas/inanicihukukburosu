import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "İnanıcı Hukuk Bürosu | Güvenilir Hukuki Danışmanlık",
  description: "Bireysel ve kurumsal müvekkillerimize şeffaf, hızlı ve özenli hukuki danışmanlık sunuyoruz. Ankara Hukuk Bürosu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-p-24">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-offwhite text-navy-900 dark:bg-navy-900 dark:text-offwhite`}
      >
        {children}
      </body>
    </html>
  );
}
