"use-client";
import Image, { type StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import hero from "./hero.svg";
import { AudioRecorder } from "react-audio-voice-recorder";

function Hero() {

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };


  //   useEffect(() => {
  //     console.log(form);
  //     }, [form]);

  return (
    <div className="mb-10 flex items-center">
      <div className="mx-[10%] flex flex-col lg:w-1/2 ">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Please tell us what you need!
          <br /> We are <span className="text-[#444BD3]">here to help.</span>
        </h1>
        {/* <Recorder Render={RecorderUI} /> */}
        <textarea
          className="mt-10 h-40 w-full rounded-md border-2 border-[#444BD3] p-5  "
          placeholder="Enter your message here"
        />
        <p className="my-5 text-center text-2xl  font-semibold">OR</p>
        <button className="mx-auto w-full rounded-md bg-[#444BD3] px-5 py-3 text-white">
          <svg
          className="inline-block mr-2"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 5.33335C14.5293 5.33335 13.3333 6.52935 13.3333 8.00002V14.6667C13.3333 16.1374 14.5293 17.3334 16 17.3334C17.4707 17.3334 18.6667 16.1374 18.6667 14.6667V8.00002C18.6667 6.52935 17.4707 5.33335 16 5.33335ZM21.3333 14.6667C21.3333 17.608 18.9413 20 16 20C13.0587 20 10.6667 17.608 10.6667 14.6667V8.00002C10.6667 5.05869 13.0587 2.66669 16 2.66669C18.9413 2.66669 21.3333 5.05869 21.3333 8.00002V14.6667ZM24 13.3334C24.7373 13.3334 25.3333 13.9307 25.3333 14.6667C25.3333 19.36 21.8493 23.2427 17.3333 23.8934V26.6667H20.14C20.7973 26.6667 21.3333 27.2027 21.3333 27.86V28.14C21.3333 28.7974 20.7973 29.3334 20.14 29.3334H11.86C11.2027 29.3334 10.6667 28.7974 10.6667 28.14V27.86C10.6667 27.2027 11.2027 26.6667 11.86 26.6667H14.6667V23.8934C10.1507 23.2427 6.66667 19.36 6.66667 14.6667C6.66667 13.9307 7.26267 13.3334 8 13.3334C8.73733 13.3334 9.33333 13.9307 9.33333 14.6667C9.33333 18.3427 12.324 21.3334 16 21.3334C19.676 21.3334 22.6667 18.3427 22.6667 14.6667C22.6667 13.9307 23.2627 13.3334 24 13.3334Z"
              fill="white"
            />
          </svg>
          Voice Promt
        </button>
      </div>

      <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="mp3"
    />

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
