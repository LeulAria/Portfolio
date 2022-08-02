import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-waves-effect/lib/ripple.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
