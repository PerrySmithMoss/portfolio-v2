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
          <link
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
          />
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
