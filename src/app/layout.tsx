import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import MenuSetup from "@/components/menu-setup";
import SiteFooter from "@/components/site-footer";
import SiteNavbar from "@/components/site-navbar";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicAsset = (path: string) => `${publicBasePath}${path}`;

export const metadata: Metadata = {
  title: "TechPay.ai | You Deserve a Computer",
  description:
    "Flexible payments, local store discovery, and guided laptop recommendations with a polished 3D landing experience.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: publicAsset("/favicon.ico"), sizes: "any" },
      { url: publicAsset("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: publicAsset("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      {
        url: publicAsset("/android-chrome-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: publicAsset("/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [{ url: publicAsset("/favicon.ico") }],
    apple: [
      {
        url: publicAsset("/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "TechPay.ai",
    statusBarStyle: "default",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-techpay-bg">
        <LenisProvider />
        <SiteNavbar />
        {children}
        <SiteFooter />
        <MenuSetup />
      </body>
    </html>
  );
}
