import Header from "components/Header";
import "../../styles/globals.css";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Providers from "components/Providers";

export const metadata = {
  title: "netialap.com",
  description: "Created by Zahid hussain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
     
        <div className="max-w-7xl mx-auto scroll-smooth">
          <Providers>
            <div className="bg-primary w-full overflow-hidden">
              <div className={`sm:px-16 px-6 flex justify-center items-center`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                  <link rel="icon" href="/n.png" />
                  <Header />
                  <hr className="border-[#0A7DFF]"/>
                   {/* <div className="mt-5"> */}
                  <Banner />

                   {/* </div> */}
                  <div className="relative min-h-screen">{children}
                  </div>
                  <div className="position-fixed">
                    <div className="relative flex overflow-x-hidden  mb-5 rounded-md">
                      <div className="py-12 animate-marquee whitespace-nowrap ">
                        <span className="inline-block mx-8">
                          Sponser Website
                        </span>
                        <span className="inline-block mx-8">Sponsor Email</span>
                        <span className="inline-block mx-8">
                          Sponsor Banner
                        </span>
                        <span className="inline-block mx-8">
                          Netialap Group 2024
                        </span>
                        <span className="inline-block mx-8">
                          Sponsor Products
                        </span>
                        <span className="inline-block mx-8">
                          Sponsor Website
                        </span>
                      </div>

                      <div className="py-12 animate-marquee whitespace-nowrap">
                        <span className="inline-block mx-8">
                          Sponser Website
                        </span>
                        <span className="inline-block mx-8">Sponsor Email</span>
                        <span className="inline-block mx-8">
                          Sponsor Banner
                        </span>
                        <span className="inline-block mx-8">
                          Netialap Group 2024
                        </span>
                        <span className="inline-block mx-8">
                          Sponsor Products
                        </span>
                        <span className="inline-block mx-8">
                          Sponsor Website
                        </span>
                      </div>
                    </div>

                    <hr className="border-[#0A7DFF]" />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </Providers>
        </div>
        {/* <h1>hi zahid you are the best</h1> */}
      </body>
    </html>
  );
}
