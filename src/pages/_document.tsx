import FooterThree from 'components/Footer';
import Header from 'components/Header';
import Providers from 'components/Providers';
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
         <Providers>
         <Header />

          <Main />
          <NextScript />
                      
                      <FooterThree />
          </Providers>
       
                      
        </body>
      </Html>
    );
  }
}

export default MyDocument;
