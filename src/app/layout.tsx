import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motomation | Build, Launch & Scale Your Digital Ideas",

  description:
    "Motomation is a full-service digital agency helping businesses transform ideas into powerful websites, mobile applications, automation systems, and scalable digital products.",

  keywords: [
    "Motomation",
    "Digital Agency",
    "Website Development",
    "App Development",
    "Software Development",
    "Business Automation",
    "AI Solutions",
    "Startup Development",
    "UI UX Design",
    "Web Applications",
    "Mobile Apps",
    "SaaS Development",
  ],

  authors: [
    {
      name: "Nitin Kumar",
    },
  ],

  creator: "Nitin Kumar",

  openGraph: {
    title: "Motomation | Digital Products That Move Businesses Forward",

    description:
      "From websites and apps to automation and AI-powered solutions — Motomation helps startups and businesses design, build, and launch technology products.",

    url: "https://motomation.in",

    siteName: "Motomation",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Motomation | Build Smarter Digital Solutions",
    description:
      "Your technology partner for websites, apps, AI automation, and custom software development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </SmoothScroll>
    </html>
  );
}