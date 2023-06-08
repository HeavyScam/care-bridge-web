"use-client";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import hero from "./hero.svg";

function Hero() {
  //   useEffect(() => {
  //     console.log(form);
  //     }, [form]);

  return (
    <div className="mb-10 flex items-center">
      <div className="mx-[10%] flex flex-col lg:w-1/2 ">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Create a positive impact.
          <br /> <span className="text-[#444BD3]">Volunteer now!</span>
        </h1>

        <div className="mt-10 flex flex-col gap-4">
          <div className="volunteer-box my-4 flex flex-col gap-4 rounded-xl p-5 text-lg">
            <div className="flex items-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#CCCCCF" />
              </svg>
              <p className="ml-5">Name</p>
            </div>
            <p>Old person needs: “Prompt here”</p>
          </div>
          <div className="volunteer-box my-4 flex flex-col gap-4 rounded-xl p-5 text-lg">
            <div className="flex items-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#CCCCCF" />
              </svg>
              <p className="ml-5">Name</p>
            </div>
            <p>Old person needs: “Prompt here”</p>
          </div>
        </div>
      </div>

      <div className="ml-auto hidden lg:block">
        <Image
          src={hero as StaticImageData}
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default Hero;
