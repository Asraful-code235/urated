import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientHeader } from "@/components/organisms/layout/ClientHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "URated - Unleash Your Game",
    template: "%s | URated"
  },
  description: "Join URated, where gamers and creators collide to redefine competition and community. Experience the future of competitive gaming and esports.",
  keywords: ["gaming", "esports", "competitive gaming", "gaming community", "tournaments", "clan battles", "URated"],
  authors: [{ name: "URated Team" }],
  creator: "URated",
  publisher: "URated",
  metadataBase: new URL("https://urated.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urated.com",
    siteName: "URated",
    title: "URated - Unleash Your Game",
    description: "Join URated, where gamers and creators collide to redefine competition and community.",
  },
  twitter: {
    card: "summary_large_image",
    title: "URated - Unleash Your Game",
    description: "Join URated, where gamers and creators collide to redefine competition and community.",
    creator: "@urated",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased`}
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif'
        }}
      >
        <ClientHeader />
        {children}
      </body>
    </html>
  );
}
