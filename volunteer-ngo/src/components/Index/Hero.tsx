import Image, { type StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import hero from "./hero.svg";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Hero() {
 
  const [form, setForm] = useState("signup");

//   useEffect(() => {
//     console.log(form);
//     }, [form]);

  return (
    <div className="flex mb-10 items-center">
      <div className="ml-[10%] lg:w-1/2 flex-col text-4xl font-bold lg:text-6xl">
        <h1>Get help,</h1>
        <h1>
          <span className="text-[#444BD3]">whenever</span> you want,
        </h1>
        <h1>
          <span className="text-[#444BD3]">wherever</span> you want!
        </h1>
        {form === "signup" ? (<SignupForm setForm={setForm}/>):(<LoginForm setForm={setForm}/>)}
      </div>
      <div className="hidden lg:block ml-auto">
        <Image src={hero as StaticImageData} alt="hero" width={500} height={500}  />
      </div>
    </div>
  );
}

export default Hero;
