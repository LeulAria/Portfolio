import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark"
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
