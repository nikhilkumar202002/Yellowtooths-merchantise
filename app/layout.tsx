import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./Components/Common/ClientLayoutWrapper";

// Configure the Manrope font
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Metadata can only be exported from a Server Component
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
      <body className={`${manrope.variable} antialiased font-sans`}>
        {/* Pass children into the Client Wrapper that handles path detection */}
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}