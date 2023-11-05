import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";


const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    category[]->
  } | order(_createdAt desc)

`;

export default async function HomePage() {
  const isPreview = previewData();

  if (isPreview) {
    return (
      <PreviewSuspense
        fallback={
          <div className="my-40 flex">
          <div className="relative mx-auto h-10 w-10">
            <div className="relative mx-auto ms-5 h-24 w-24 animate-bounce rounded-full border-2">
              <div className="absolute bottom-0 right-10">
                <div className="relative h-40 animate-bounce">
                  <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-[#0A7DFF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
function previewData(): boolean {
  // replace this with your actual implementation
  return true;
}

