import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
