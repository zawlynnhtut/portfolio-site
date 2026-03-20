import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Zaw Lynn Htut | Product Data Science & Forecasting Systems",
  description:
    "Portfolio showcasing demand forecasting, decision intelligence, and inventory guidance systems built by a product data scientist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-neutral-950 text-white">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-white/5 bg-neutral-950/80">
            <nav className="mx-auto flex max-w-5xl items-center justify-end gap-6 px-6 py-4 text-sm text-neutral-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/project-1" className="hover:text-white">
                Project
              </Link>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/5">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-neutral-400">
              <span>Zaw Lynn Htut</span>
              <span>{year} • All rights reserved</span>
              <a
                href="https://github.com/zawlynnhtut/portfolio-site"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
