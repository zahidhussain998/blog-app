import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Providers from '../../components/providers';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" suppressHydrationWarning>
        <Head>
      <link rel="icon" href="/icon.png" />
        </Head>
        <body>
         {/* <Providers> */}

          <Main />
          <NextScript />
                      
          {/* </Providers> */}
       
                      
        </body>
      </Html>
    );
  }
}

export default MyDocument;
