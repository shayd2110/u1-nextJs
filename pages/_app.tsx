import '../styles/globals.css';
import type { AppProps } from 'next/app';

if (typeof window !== 'undefined') {
  // Ensure window is defined
  require('@u1/vanilla-js-a11y');
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
