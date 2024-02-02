/* eslint-disable react/jsx-key */
"use client";
import Image from "next/image";
import { useState } from 'react';
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";


type Props = {
  posts: Post[];
};

export const revalidate = 20;


function BlogList({ posts }: Props) {
    const [visiblePosts, setVisiblePosts] = useState(6); // State for visible posts
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query


    // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };


  return (
    <div>
   
      <hr className="border-[#0A7DFF] md-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* post */}
        {filteredPosts.slice(0, visiblePosts).map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer">
              <div
                className="relative w-full h-80 drop-shadow-xl group-hover:scale-105
            transition-transform duration-200
             ease-out"
              >
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
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
                </div>
              </div>
              <div className="ml-5 flex-1">
                <p className="underline decoration-4.2 decoration-[#0A7DFF] text-lg font-bold text-white">{post.title}</p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>
              <p className="ml-5 font-bold flex items-center group-hover:underline text-[#0A7DFF]">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
        </div>
 <div className="flex justify-center mb-10">
  {filteredPosts.length > visiblePosts && (
    <button
      className="flex items-center bg-white text-black px-4 py-2 mt-4 rounded-xl"
      onClick={loadMorePosts}
    >
      Load More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 ml-2" 
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg>
    </button>
  )}
</div>

    </div>
  );
}

export default BlogList;
