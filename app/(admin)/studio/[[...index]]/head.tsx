export {NextStudioHead} from 'next-sanity/studio/head'

import { NextStudioHead } from 'next-sanity/studio/head'

export const metadata = {
  title: "netialap.com",
  description: "Created by Zahid hussain",
};

import Head from 'next/head'

export default function CustomStudioHead (){
    return (
        
     <>
      <NextStudioHead favicons={true}/>
      {/* <Head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  {/* Add other head elements as needed */}
{/* </Head> */} 

     
     </>
       
        
    )
}