import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../../../../components/RichTextComponent";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 20;

export async function generateStaticParams() {
  const query = groq`*[_type=='post'] {
    slug
  }`;

  const slug: Post[] = await client.fetch(query);
  const slugRoutes = slug.map((slug) => slug.slug.current);

  console.log('Generated slug routes:', slugRoutes);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

function PostContent({ body }: { body: any }) {
  return (
    <div className="max-w-4xl mx-auto">
      <PortableText value={body} components={RichTextComponent} />
    </div>
  );
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
       ...,
        author->,
       categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  console.log(post);

  return (
    <article className="px-4 md:px-10 pb-20 max-w-3xl mx-auto">
      <section className="space-y-4 md:space-y-2 ">
        <div className="relative min-h-72 md:min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            {/* <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            /> */}
          </div>
          <section className="p-4 md:p-5 w-full ">
            <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-5">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold">{post.title}</h1>
                <h2 className="italic pt-6 ">{post.description}</h2>
                  <div className="flex items-center space-x-2">
                    <Image
                      className="rounded-full"
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      width={50}
                      height={50}
                    />
                    <div className="w-full md:w-64 mt-5">
                      <h3 className="text-lg font-bold">
                        {post.author.name}
                <p className="">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                      </h3>
                      <div>{/* author a10 */}</div>
                    </div>
                  </div>

              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                   
            {post.categories?.map((category) => (
                  
                  <p key={category._id} className="text-xs bg-[#0A7DFF] text-white px-2 py-1 rounded-full">
                    {category.title}
                  </p>
                ))}
            </div>
          </section>
        </div>
      </section>
      <hr/>
      <div className="max-w-2xl mx-auto">
        <PostContent body={post.body} />
      </div>
    </article>
  );
}

export default Post;
