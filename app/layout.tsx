import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

// 2. Configure the Manrope font
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yellowtooths | Merchandise",
  description: "Shop official Yellowtooths merchandise including movie merch, sculptures, t-shirts, fibre frames, and new drops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Add the manrope variable to the body className */}
      <body className={`${manrope.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}