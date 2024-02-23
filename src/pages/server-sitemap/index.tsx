// pages/server-sitemap/index.tsx

import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { createClient } from '@sanity/client';

// Define the types for Sanity response and post
type SanityPost = {
  slug: {
    current: string;
  };
};



type SanityResponse = SanityPost[];

const sanityClient = createClient({
  projectId: 'pel38u82',
  dataset: 'production',
  useCdn: false, // Set to true if you want to enable the Content Delivery Network (CDN)
});

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch data for your blog posts (replace this with your actual data fetching logic)
    const response: SanityResponse = await sanityClient.fetch('*[_type == "post"]{ slug }');

    // Constructing the sitemap fields
    const fields: ISitemapField[] = response.map((post) => ({
      loc: `https://www.netialap.com/${post.slug.current}`,
      lastmod: new Date().toISOString(),
    }));

    // Manually construct the sitemap XML string
    const sitemapXml = getServerSideSitemap({ baseUrl: "https://www.netialap.com", fields } as any);

    // Returning the sitemap as props
    return {
      props: {
        sitemapXml,
      },
    };
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    // In case of an error, return an empty sitemap
    return {
      props: {
        sitemapXml: '',
      },
    };
  }
};

export default function Site({ sitemapXml }: { sitemapXml: string }) {
  // Render the sitemap XML string directly or use it as needed
  console.log(sitemapXml);
  return null;
}
