import type { Metadata } from 'next';
import { Inter, Manrope, DM_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

const roobertTrial = localFont({
  variable: '--font-roobert-trial',
  src: [
    {
      path: '../../public/fonts/RoobertTRIAL-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/RoobertTRIAL-SemiBold.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/fonts/RoobertTRIAL-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CogPiece - Swap',
  description: 'Trade DeFi assets privately with MEV protection.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${dmMono.variable} ${roobertTrial.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
