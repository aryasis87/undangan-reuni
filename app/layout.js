import './globals.css';
import { Bungee, Gochi_Hand, Karla } from 'next/font/google';
import config from '@/lib/data';

const display = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee',
  display: 'swap',
});
const script = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gochi',
  display: 'swap',
});
const body = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://undangan.example.com'),
  title: config.meta.title,
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    type: 'website',
    locale: 'id_ID',
    images: [{ url: config.gallery[0].src, width: 600, height: 600 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
  },
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#c8553d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
