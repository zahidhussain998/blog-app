import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import "../../styles/globals.css";


type Post = {
    slug: string;
  };
  
  // Define the type for the sitemap props
  type SiteProps = {
    sitemapXml: string;
  };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Your existing logic to fetch data, assuming `data` is an array of objects with a `slug` property
  const response = await fetch("https://www.netialap.com");
  const data: { slug: string }[] = await response.json();

  // Constructing the sitemap fields
  const fields: ISitemapField[] = data.map((post) => ({
    loc: `https://www.netialap.com/${post.slug}`,
    lastmod: new Date().toISOString(), // Replace with the actual last modification date
  }));

  // Manually construct the sitemap XML string
  const sitemapXml = getServerSideSitemap({ baseUrl: "https://www.netialap.com", fields } as any);

  // Returning the sitemap as props
  return {
    props: {
      sitemapXml,
    },
  };
};

export default function Site({ sitemapXml }: any) {
  // Render the sitemap XML string directly or use it as needed
  console.log(sitemapXml);
  return null;
}
