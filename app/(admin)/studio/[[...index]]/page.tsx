'use client'


import {NextStudio} from 'next-sanity/studio'

import config from '../../../../sanity.config'



export default function StudioPage() {
    // This is a placeholder page that will be replaced by the Studio
    return <NextStudio config={config} />
}