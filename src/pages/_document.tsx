import FooterThree from "components/Footer";
import Header from "components/Header";
import Providers from "components/Providers";
import { Metadata } from "next";
import Document, { Html, Head, Main, NextScript } from "next/document";
export const metadata: Metadata = {
  title: "netialap.com",
  description: "Created by Zahid hussain",
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
           <Head>
        <link rel="icon" href="/n.png" />
        </Head>
        <body>
          <Providers>
            <div className="max-w-7xl mx-auto">
              <div className="bg-primary w-full overflow-hidden">
                <div
                  className={`sm:px-16 px-6 flex justify-center items-center`}
                >
                  <div className={`xl:max-w-[1280px] w-full`}>
                    <Header />

                    <Main />
                    <NextScript />

                    <FooterThree />
                  </div>
                </div>
              </div>
            </div>
          </Providers>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
