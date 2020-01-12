import theme from "@/theme";
import { ServerStyleSheets } from "@material-ui/core";
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Main,
  NextScript
} from "next/document";
import React from "react";

export default class Document extends NextDocument {
  render() {
    const font = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href={font} />
          <link rel="icon" type="image/x-icon" href="/static/assets/favicon.ico" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      )
    };
  }
}
