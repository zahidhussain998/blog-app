import { groq } from "next-sanity";
import { previewData } from "next/headers";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../../../../components/RichTextComponent";
import Footer from "components/Footer";



type Props = {
  params: {
    slug: string;
  };
};

// export const revalidate = 30;

export async function generateStaticParams() {


  const query = groq`*[_type=='post']
  {
    slug
  }`;

  const slug: Post[] = await client.fetch(query);
  const slugRoutes = slug.map((slug) => slug.slug.current);

  return slugRoutes.map(slug => ({
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
    <article className="px-10 pb-20">
      <section className="space-y-2 border border-[#F7AB0A] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author ? post.author.name : ""}
              fill
            />
          </div>
          <section className="p-5 bg-[#F7AB0A] w-full ">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
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
                  src={
                    post.author && post.author.image
                      ? urlFor(post.author.image).url()
                      : ""
                  }
                  alt={post.author ? post.author.name : ""}
                  width={40}
                  height={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* author a10 */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
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
     
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
}

export default Post;


