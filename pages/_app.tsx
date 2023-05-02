import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/dracula.css";
import type { AppProps } from "next/app";
import {
  GlobalUIProvider,
} from "../context/GlobalUI.context";
import { Layout } from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalUIProvider>
  );
}

export default MyApp;
