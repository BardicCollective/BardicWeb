import Document, { Html, Head, Main, NextScript } from 'next/document';
import nextCookie from 'next-cookies';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { darkMode } = nextCookie(ctx);
    return { ...initialProps, darkMode: darkMode };
  }

  render() {
    // const bodyClass = this.props.darkMode ? 'darkMode' : 'lightMode';
    const bodyClass = 'light no-margin'
    return (
      <Html>
        <Head />
        <body className={bodyClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
