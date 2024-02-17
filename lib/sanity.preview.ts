"use client";


import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client';

function onPublicAccessOnly() {
    console.log('Preview data is accessible publicly.');  // Log a message
}

if (!projectId || !dataset) {
    console.log('Sanity environment variables are not set.');  // Log a message
}


export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly
});
