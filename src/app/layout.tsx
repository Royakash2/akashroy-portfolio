import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/floating-nav";
import { ThemeProvider } from "@/components/theme-provider";

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
      {/* body is full-width so DotBackground can span the entire viewport */}
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
            <main className="flex flex-col min-h-dvh space-y-10">
              {children}
            </main>
          </div>
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
