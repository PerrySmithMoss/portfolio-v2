import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { GlobalUIProvider } from "../context/GlobalUI.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalUIProvider>
      <Component {...pageProps} />
    </GlobalUIProvider>
  );
}

export default MyApp;
