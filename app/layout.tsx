
import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";
import ClientAnalytics from "../components/ClientAnalytics";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair-display',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const path = params.slug ? '/' + params.slug.join('/') : '/';
  return {
    metadataBase: new URL('https://dumoreconstruction.com'),
    alternates: {
      canonical: new URL(path, 'https://dumoreconstruction.com'),
    },
    title: {
      template: '%s | Dumore Construction and Remodeling',
      default: 'Dumore Construction and Remodeling',
    },
    description: 'Top-rated general contractor in Honolulu, Hawaii, specializing in new construction, kitchen and bathroom remodeling, home additions, and storm damage repair.',
    openGraph: {
      title: 'Dumore Construction and Remodeling | General Contractor in Honolulu, HI',
      description: 'High-quality construction and remodeling services in Hawaii.',
      url: `https://dumoreconstruction.com${path}`,
      siteName: 'Dumore Construction and Remodeling',
      images: [
        {
          url: '/hawaii-general-contractor-logo.webp',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dumore Construction and Remodeling | General Contractor in Honolulu, HI',
      description: 'High-quality construction and remodeling services in Hawaii.',
      creator: '@dumorehawaii',
      images: ['/hawaii-general-contractor-logo.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`} data-scroll-behavior="smooth">
      <body>
        <Accessibility />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <ClientAnalytics /> 
      </body>
    </html>
  );
}
