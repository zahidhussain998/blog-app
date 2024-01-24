/* eslint-disable react/jsx-key */
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
    <article className="px-10 pb-20 text-white">
      <section className="space-y-2 border border-[#0A7DFF] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-[#0A7DFF] w-full ">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p className="text-white">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold text-white">
                    {post.author.name}
                  </h3>
                  <div>{/* author a10 */}</div>
                </div>
              </div>
            </div>

            <h2 className="italic pt-10 text-white">{post.description}</h2>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
            {post.categories &&
                  post.categories.map(
                    (
                      category // eslint-disable-next-line react/jsx-key
                    ) => (
                      <p
                        key={category}
                        className="bg-gray-800 text-white px-1 rounded-full text-sm font-semibold ml-4"
                      >
                        {category}
                      </p>
                    )
                  )}
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
}

export default Post;
