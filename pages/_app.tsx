import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/dracula.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { GlobalUIProvider } from "../context/GlobalUI.context";
import { Layout } from "../components/Layout/Layout";

const poppinsRegular = localFont({
  src: "../public/assets/fonts/Poppins/Poppins-Regular.woff2",
  weight: "400",
  display: "optional",
  fallback: ["system-ui", "sans-serif"],
});

const poppinsMedium = localFont({
  src: "../public/assets/fonts/Poppins/Poppins-Medium.woff2",
  weight: "500",
  display: "optional",
  fallback: ["system-ui", "sans-serif"],
});

const poppinsBold = localFont({
  src: "../public/assets/fonts/Poppins/Poppins-Bold.woff2",
  weight: "700",
  display: "optional",
  fallback: ["system-ui", "sans-serif"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalUIProvider>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppinsRegular.style.fontFamily};
          --font-poppins-medium: ${poppinsMedium.style.fontFamily};
          --font-poppins-bold: ${poppinsBold.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalUIProvider>
  );
}

export default MyApp;
