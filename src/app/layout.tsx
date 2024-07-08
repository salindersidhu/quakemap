import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import { HeaderLinks } from "@/data/headerLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quakemap | Realtime Earthquakes",
  description:
    "Track earthquakes around the world in realtime from the comfort of your smartphone.",
  openGraph: {
    siteName: "Quakemap",
    title: "Quakemap",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header links={HeaderLinks} />
        {children}
      </body>
    </html>
  );
}
