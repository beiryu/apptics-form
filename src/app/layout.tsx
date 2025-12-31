import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
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
    default: 'Apptics Form',
    template: '%s | Apptics Form',
  },
  description:
    'Scale your business with the right systems in place. Book a call with the Apptics team to discover how we can help you scale faster.',
  keywords: [
    'business scaling',
    'systems',
    'growth',
    'ecommerce',
    'dropshipping',
    'business development',
    'scaling platform',
  ],
  authors: [{ name: 'Apptics Team' }],
  creator: 'Apptics',
  publisher: 'Apptics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apptics-form.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apptics-form.vercel.app',
    title: 'Apptics Form',
    description:
      'Scale your business with the right systems in place. Book a call with the Apptics team to discover how we can help you scale faster.',
    siteName: 'Apptics Form',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Apptics Form',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apptics Form',
    description:
      'Scale your business with the right systems in place. Book a call with the Apptics team to discover how we can help you scale faster.',
    images: ['/og.png'],
    creator: '@apptics',
    site: '@apptics',
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
