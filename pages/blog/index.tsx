import React from "react";
import BlogHero from "../../components/blog/BlogHero";

import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import Link from "next/link";

const index = ({ posts }: any) => {
  return (
    <div className="mx-[10%]">
      <BlogHero />

      <section className="my-10">
        <ul>
          {posts.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid grid-cols-3 gap-x-10 gap-y-14">
        <div>
          <span className=" text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#58f06f] to-[#9187ef] font-[400] text-base mb-1">
            Apr 26, 2020.
          </span>
          <h1 className="mt-0 font-extrabold mb-3 max-w-[260px] md:max-w-[500px] text-xl md:text-3xl">
            A first look at 'Fast API'
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            necessitatibus maiores aspernatur? Qui at dicta...
          </p>
        </div>
        <div>
          <span className=" text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#58f06f] to-[#9187ef] font-[400] text-base mb-1">
            Apr 26, 2020.
          </span>
          <h1 className="mt-0 font-extrabold mb-3 max-w-[260px] md:max-w-[500px] text-xl md:text-3xl">
            A first look at 'Fast API'
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            necessitatibus maiores aspernatur? Qui at dicta...
          </p>
        </div>
        <div>
          <span className=" text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#58f06f] to-[#9187ef] font-[400] text-base mb-1">
            Apr 26, 2020.
          </span>
          <h1 className="mt-0 font-extrabold mb-3 max-w-[260px] md:max-w-[500px] text-xl md:text-3xl">
            A first look at 'Fast API'
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            necessitatibus maiores aspernatur? Qui at dicta...
          </p>
        </div>
        <div>
          <span className=" text-gray-00 bg-clip-text text-transparent bg-gradient-to-l  from-[#58f06f] to-[#9187ef] font-[400] text-base mb-1">
            Apr 26, 2020.
          </span>
          <h1 className="mt-0 font-extrabold mb-3 max-w-[260px] md:max-w-[500px] text-xl md:text-3xl">
            A first look at 'Fast API'
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            necessitatibus maiores aspernatur? Qui at dicta...
          </p>
        </div>
      </div>
    </div>
  );
};

// Statically fetch all posts
export async function getStaticProps() {
  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug"]));

  return { props: { posts } };
}

export default index;
