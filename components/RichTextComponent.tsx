import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import Link from 'next/link';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import { AllHTMLAttributes } from 'react';

import dynamic from 'next/dynamic';
import { PortableTextTypeComponentProps } from '@portabletext/react';


const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

// interface PortableTextTypeComponentProps<T = any> extends AllHTMLAttributes<any> {
//   node?: T;
// }

// Refractor.registerLanguage(js);

// interface CodeNode {
//   language?: string;
//   code?: string;
//   highlightedLines?: number[];
// }

type YoutubeNode = {
  url: string;
};

export const serializers = {
 
  types: {
    youtube: ({ value }: any) => {
      // Log the value object to check its structure
      console.log('YouTube Node:', value);

      // Check if node is defined and contains the URL
      if (value && value.url) {
        return <ReactPlayer url={value.url} />;
      } else if (value && value.data && value.data.url) {
        // If URL is nested within a data object
        return <ReactPlayer url={value.data.url} />;
      } else {
        // If URL is missing, render a message
        return <p>No video URL provided</p>;
      }
    },

    image: ({ value }: any) => {
      const imageWidth = value?.metadata?.width || 600; // Set a default value for width
      const imageHeight = value?.metadata?.height || 400; // Set a default value for height

      return (
        <div className="relative w-full">
          <Image
            className="object-cover object-center rounded-lg"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={imageWidth}
            height={imageHeight}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      );
    },
    
    
   
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-5 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-5 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-5 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#0A7DFF] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel =
        value && value.href && value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#0A7DFF] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
    // Define other types components here
  
};
