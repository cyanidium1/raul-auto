import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import { myFontPanagram } from './fonts';
import './globals.css';
import '../components/Loader/loader.css'
// import Loader from '@/components/Loader/Loader';


export const metadata: Metadata = {
  title: 'Raul Auto',
  description: 'Car from USA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" href="/logo.png"></link>
      <link rel="manifest" href="/manifest.json"></link>
      <body className={myFontPanagram.className}>
        {/* <Loader /> */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
