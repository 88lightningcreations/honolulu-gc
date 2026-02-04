import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AxeAccessibility from "./utils/AxeAccessibility";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "General Contracting Company Hawaii",
  description: "Reliable Home Remodeling Contractor for Quality Renovation in Hawaii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AxeAccessibility />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
