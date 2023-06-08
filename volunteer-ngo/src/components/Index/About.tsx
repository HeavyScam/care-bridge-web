import React from "react";

function About() {
  return (
    <div id="about" className="mx-[10%] my-20">
      <h1 className="text-left text-4xl font-bold text-[#444BD3] ">
        The backbone of the elderly
      </h1>
      <p className="my-5 text-xl text-black lg:text-3xl">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>

      <div className="flex flex-col gap-4 text-lg md:flex-row">
        <div className="about-box flex flex-col justify-center rounded-xl px-4 py-8 lg:w-1/4">
          <p className="font-bold text-[#444BD3]">384K+</p>
          <p>Active Users</p>
        </div>
        <div className="about-box flex flex-col justify-center rounded-xl px-4 py-8 lg:w-1/4">
          <p className="font-bold text-[#444BD3]">90%</p>
          <p>Retention Rate</p>
        </div>
        <div className="about-box flex flex-col justify-center rounded-xl px-4 py-8 lg:w-1/4">
          <p className="font-bold text-[#444BD3]">135+</p>
          <p>NGOs Collaborated</p>
        </div>
        <div className="about-box flex flex-col justify-center rounded-xl px-4 py-8 lg:w-1/4">
          <p className="font-bold text-[#444BD3]">45+</p>
          <p>Countries</p>
        </div>
      </div>
    </div>
  );
}

export default About;
