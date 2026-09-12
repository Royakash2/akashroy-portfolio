import type { Metadata } from "next";
import { Sora, JetBrains_Mono, Instrument_Serif, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Akash Roy | Full Stack Developer",
  description:
    "Portfolio of Akash Roy — a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Akash Roy | Full Stack Developer",
    description:
      "Portfolio of Akash Roy — a full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
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
      className={`${sora.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${dancingScript.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen antialiased"
        suppressHydrationWarning
        style={{
          fontFamily: "var(--font-sans)",
          backgroundColor: "var(--bg)",
          color: "var(--fg)",
        }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
