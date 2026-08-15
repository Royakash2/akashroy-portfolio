import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/dock";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Akash Sharma | Full Stack Developer",
  description:
    "Portfolio of Akash Sharma — a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Akash Sharma | Full Stack Developer",
    description:
      "Portfolio of Akash Sharma — a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <main className="flex flex-col min-h-[100dvh] space-y-10">
          {children}
        </main>
        <Dock />
      </body>
    </html>
  );
}
