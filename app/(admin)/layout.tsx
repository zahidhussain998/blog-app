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

  return (
    
    <html>
          <body>{children}</body>
    </html>
  )
}
