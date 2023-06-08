import { type blog, type blogsData } from "@/types/api";
import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import image from "./image.svg"

function Blogs() {
  const [blogs, setBlogs] = useState<blog[]>([]);

  const getBlogs = async () => {
    try {
      if (!process.env.NEXT_PUBLIC_SERVER_URL) return;
      const { data } = await axios.get<blogsData>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/findall`
      );
      console.log(data);
      if (data.status === "success") setBlogs(data.blogs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void getBlogs();
  }, []);

  return (
    <div id="blogs" className="mx-[10%] my-20">
      <h1 className="text-left text-3xl font-bold text-[#444BD3] lg:text-5xl">
        Blogs
      </h1>
      <div className="my-10 flex flex-col items-center gap-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <p className="text-3xl font-bold lg:text-5xl">From our blog</p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-xl text-gray-500 lg:text-2xl">
            Creativity is a highfalutin word for the work I have to do between
            now and Tuesday.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-lg md:flex-row">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="about-box flex min-h-[550px] w-full flex-col justify-center rounded-xl md:w-1/3 cursor-pointer "
            onClick={() => {
              localStorage.setItem("data", JSON.stringify(blog));
              void Router.push(`/blog`);
            }}
          >
            <Image src={image as StaticImageData} alt="hero" width={500} height={500}  />

            <p className=" h-[30px] px-4 pt-1 text-lg font-bold uppercase text-gray-400">
              {blog.subTitle}
            </p>
            <p className="my-2 h-[56px] px-4 text-xl font-bold uppercase">
              {blog.title}
            </p>
            <p className="h-[144px] overflow-hidden px-4 pb-8">{`${blog.description.substring(0,100)}...`}</p>
            <div className="flex flex-col justify-between px-4">
              <p className="h-[30px] pt-1 text-lg font-bold uppercase text-gray-400">
                {blog.author}
              </p>
              <p className="h-[30px] pt-1 text-lg font-bold uppercase text-gray-400">
                {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
