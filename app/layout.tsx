
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { nowHiring, businessOpportunity, privacyPolicy, termsOfService } from '@/lib/paths';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://dumoreconstruction.com'),
    title: 'Dumore Construction and Remodeling | General Contractor in Honolulu, HI',
    description: 'Top-rated general contractor in Honolulu, Hawaii, specializing in custom new home builds, full home renovations, kitchen and bathroom remodeling, and commercial construction. Your vision, our expertise.',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: 'Dumore Construction and Remodeling | General Contractor in Honolulu, HI',
      description: 'High-quality construction and remodeling services in Hawaii.',
      url: 'https://dumoreconstruction.com',
      siteName: 'Dumore Construction and Remodeling',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/hawaii-general-contractor-logo.webp',
          width: 800,
          height: 600,
          alt: 'Dumore Construction and Remodeling Logo',
        },
      ],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Dumore Construction and Remodeling",
    "url": "https://dumoreconstruction.com",
    "logo": "https://dumoreconstruction.com/hawaii-general-contractor-logo.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Dumore Lane",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "postalCode": "96818",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-808-555-0101",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.facebook.com/dumorehawaii",
      "https://www.instagram.com/dumorehawaii",
      "https://www.linkedin.com/company/dumore-construction"
    ]
  };

  const footerLinks = {
    'Company': [
      { href: nowHiring, label: 'Now Hiring' },
      { href: businessOpportunity, label: 'Business Opportunity' },
    ],
    'Legal': [
      { href: privacyPolicy, label: 'Privacy Policy' },
      { href: termsOfService, label: 'Terms of Service' },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/living-room-remodel-honolulu-general-contractor.webp" as="image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer footerLinks={footerLinks} />
      </body>
    </html>
  );
}
