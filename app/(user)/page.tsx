import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
// import { ScatterBoxLoader } from "react-awesome-loaders";

import { Rings } from 'react-loader-spinner'



const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)

`;

export const revalidate = 20

export default async function HomePage() {
  const isPreview = previewData();

  if (isPreview) {
    return (
      <PreviewSuspense
        fallback={
          <div className=" flex">
          <div className="relative mx-auto">
          <Rings
            visible={true}
            height="80"
            width="80"
            color="#0A7DFF"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
          </div>
        </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts)

  return <BlogList posts={posts} />;
}
function previewData(): boolean {
  // replace this with your actual implementation
  return true;
}

