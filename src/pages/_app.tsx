import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/fonts/stylesheet.css';
import Navbar from '@/layout/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
