"use client";


import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client';

function onPublicAccessOnly() {
    console.log('Preview data is accessible publicly.');  // Log a message
}

if (!projectId || !dataset) {
    throw new Error('Missing projectId or dataset. Check your sanity.json or .env');
}


export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly
});
