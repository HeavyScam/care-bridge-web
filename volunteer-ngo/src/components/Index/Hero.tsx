import Image, { type StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import hero from "./hero.svg";
import Router from "next/router";

function Hero() {
 
  const [form, setForm] = useState("signup");

//   useEffect(() => {
//     console.log(form);
//     }, [form]);

  return (
    <div className="flex mb-10 items-center">
      <div className="mx-[10%] lg:mr-0 lg:w-1/2 flex-col text-3xl font-bold lg:text-6xl text-center">
        <h1>Join <span className="text-[#444BD3]">Care</span>Bridge and amplify your impact in improving the well-being of the elderly!</h1>
        <p className="mt-5 text-xl lg:text-2xl text-gray-600 text-center">
          You are a?
        </p>
        <div className="flex justify-center mt-5  gap-5">
          
        <button className="mt-5 bg-[#444BD3] text-white rounded-md px-5 py-3 text-xl lg:text-2xl w-[150px]" onClick={() => void Router.push('/volunteer')}>Volunteer</button>
        <button className="mt-5 bg-[#444BD3] text-white rounded-md px-5 py-3 text-xl lg:text-2xl w-[150px]" onClick={() => void Router.push('/ngo')}>NGO</button>
        </div>
      </div>
      <div className="hidden lg:block ml-auto">
        <Image src={hero as StaticImageData} alt="hero" width={500} height={500}  />
      </div>
    </div>
  );
}

export default Hero;
