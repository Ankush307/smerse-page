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
  title: "Smerse",
  description: "FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
  openGraph: {
    title: "Smerse",
    description: "FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
    images: [
      {
        url: "./meta-img.png",
        width: 800,
        height: 600,
        alt: "Smerse Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smerse",
    description: "FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
    images: ["./meta-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
