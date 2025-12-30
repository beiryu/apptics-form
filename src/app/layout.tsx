import type { Metadata } from 'next';
import { Inter, Manrope, DM_Mono, Geist } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CogPiece - Private DeFi Trading Platform',
    template: '%s | CogPiece',
  },
  description:
    'Trade DeFi assets privately with MEV protection, privacy-first architecture, and lightning-fast execution. Experience secure, anonymous trading on CogPiece.',
  keywords: [
    'DeFi',
    'private trading',
    'MEV protection',
    'cryptocurrency',
    'blockchain',
    'privacy',
    'trading platform',
  ],
  authors: [{ name: 'CogPiece Team' }],
  creator: 'CogPiece',
  publisher: 'CogPiece',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cog-piece.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cog-piece.vercel.app',
    title: 'CogPiece - Private DeFi Trading Platform',
    description:
      'Trade DeFi assets privately with MEV protection, privacy-first architecture, and lightning-fast execution.',
    siteName: 'CogPiece',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'CogPiece - Private DeFi Trading Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CogPiece - Private DeFi Trading Platform',
    description:
      'Trade DeFi assets privately with MEV protection, privacy-first architecture, and lightning-fast execution.',
    images: ['/og.png'],
    creator: '@cogpiece',
    site: '@cogpiece',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body className={`${inter.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
