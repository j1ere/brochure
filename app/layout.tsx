import type { Metadata } from "next";
import { ReactNode } from "react";
import { Fraunces, Manrope, Space_Mono } from "next/font/google";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://csa.stanneschaplaincy.com"),
  title: "CSA Maseno Welcome Guide",
  description: "Welcome guide for first-year students joining the Catholic Students' Association at Maseno University.",
  openGraph: {
    type: "website",
    title: "Catholic Students Association of Maseno University",
    description:
      "St. Anne's Catholic Chaplaincy and the Catholic Students' Association at Maseno University.",
  },
  twitter: {
    card: "summary_large_image",
  },
}


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}