import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { serializers } from "../../../../components/RichTextComponent";
import Card from "components/Card";
import { Metadata } from "next";


type Props = {
  params: {
    slug: string;
  };
};





export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      description,
      mainImage,
      _createdAt
    }
  `;
  const post = await client.fetch(query, params);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: urlFor(post.mainImage).url(),
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      publishedTime: new Date(post._createdAt).toISOString(),
    },
  };
}


export const revalidate = 20;

export async function generateStaticParams() {
  const query = groq`*[_type=='post'] {
    slug
  }`;

  const slug: Post[] = await client.fetch(query);
  const slugRoutes = slug.map((slug) => slug.slug.current);

  console.log("Generated slug routes:", slugRoutes);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}



function PostContent({ body }: { body: any }) {
  console.log("Body Content:", body); // Log the body content
  
  return (
    <div className="flex flex-col lg:flex-row max-w-5xl space-y-10 lg:space-y-0 lg:space-x-20">
    {/* Main Content */}
    <div className="max-w-3xl w-full mt-5 md:mt-0">
      <PortableText value={body} components={serializers} />
    </div>

    {/* Right Sidebar */}
    <div className="hidden lg:block lg:w-64 lg:sticky lg:top-10 ">
      <Card />
    </div>
  </div>

  );
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
       ...,
        author->,
       categories[]->,
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="tracking-normal  ">
      <div className="px-4 md:px-10 pb-20 max-w-7xl mx-auto">
        <section className="space-y-4 md:space-y-2 ">
          <div className="relative min-h-72 md:min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
              <Image
                className="object-cover object-center mx-auto "
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <section className="p-4 md:p-5 w-full bg-[#0A7DFF]">
              <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-5">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold">
                    {post.title}
                  </h1>
                  <h2 className="italic pt-6 ">{post.description}</h2>
                  <hr className=" border-[#0A7DFF] mt-10" />

                  <div className="flex items-center space-x-2 ">
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
                          {new Date(post._createdAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </h3>
                      <div>{/* author a10 */}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-row gap-y-2 md:gap-x-2 items-center">
                {post.categories?.map((category) => (
                  <p
                    key={category._id}
                    className="text-xs bg-black text-white px-2 py-1 rounded-full"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </section>
        <div className="max-w-7xl mx-auto "></div>

        <div></div>
        <PostContent body={post.body}  />
      </div>
    </article>
  );
}

export default Post;
