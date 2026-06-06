import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hashim — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and React Native. Building scalable enterprise applications and delightful digital experiences.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "React Native",
    "Frontend Engineer",
    "MERN Stack",
    "Hashim",
  ],
  authors: [{ name: "Hashim" }],
  creator: "Hashim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hashim — Full Stack Developer",
    description:
      "Building scalable enterprise applications and delightful digital experiences with React, Next.js, TypeScript & React Native.",
    siteName: "Hashim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim — Full Stack Developer",
    description:
      "Building scalable enterprise applications and delightful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      className={`${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
