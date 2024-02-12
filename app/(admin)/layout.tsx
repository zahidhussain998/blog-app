import { Head } from "next/dist/pages/_document"
import "../../styles/globals.css"


// export const metadata = {
//   title: "netialap.com",
//   description: "Created by Zahid hussain",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
//     <Head>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>{metadata.title}</title>
//   <meta name="description" content={metadata.description} />
//   {/* Add other head elements as needed */}
// </Head>
  return (
    
    <html>
          <body>{children}</body>
    </html>
  )
}
