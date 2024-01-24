export {NextStudioHead} from 'next-sanity/studio/head'

import { NextStudioHead } from 'next-sanity/studio/head'

import Head from 'next/head'

export default function CustomStudioHead (){
    return (
        
     <>
      <NextStudioHead favicons={false}/>
      <Head>
        <title>Custom Studio Head</title>
      </Head>

     
     </>
       
        
    )
}