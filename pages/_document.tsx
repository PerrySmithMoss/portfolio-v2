import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="/assets/fonts/Oswald/Oswald-Bold.ttf"
            as="font"
            rel="prefetch"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            href="/assets/fonts/Oswald/Oswald-ExtraLight.ttf"
            as="font"
            rel="prefetch"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            href="/assets/fonts/Oswald/Oswald-Light.ttf"
            as="font"
            rel="prefetch"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            href="/assets/fonts/Oswald/Oswald-Medium.ttf"
            as="font"
            rel="prefetch"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            href="/assets/fonts/Oswald/Oswald-Regular.ttf"
            as="font"
            rel="prefetch"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            href="/assets/fonts/Oswald/Oswald-SemiBold.ttf"
            as="font"
            rel="prefetch"
            type="font/ttf"
            crossOrigin="anonymous"
          /> */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
