import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import Link from 'next/link';

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      const imageWidth = value?.metadata?.width || 600; // Set a default value for width
      const imageHeight = value?.metadata?.height || 400; // Set a default value for height

      return (
        <div className="relative w-full">
          <Image
            className="object-cover object-center"
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
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
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

};

