/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image, { type StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import hero from "./hero.svg";
import { useAudioRecorder, AudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import { useFormik } from "formik";
import Router from "next/router";

function Hero() {
  const [open, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [categories, setCategories] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: Blob | MediaSource) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  const formik = useFormik({
    initialValues: {
      textarea: "",
    },
    onSubmit: async (values) => {
      await classifyText(values.textarea);
    },
  });

  const classifyText = async (text: string) => {
    setIsOpen(true);
    try {
      if (!process.env.NEXT_PUBLIC_ML_URL) return;
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_ML_URL}/classify`,
        {
          text,
        }
      );
      setText(text);
      setCategories(data.classification);
      // console.log(data);
      setAllowSubmit(true);
    } catch (err) {
      console.log(err);
    }
  };

  const classifyAudio = async (blob: BlobPart | undefined) => {
    if (!blob) return;
    setIsOpen(true);
    try {
      if (!process.env.NEXT_PUBLIC_ML_URL) return;
      const file = new File([blob], "prompt.webm", {
        type: "audio/webm",
      });
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_ML_URL}/classify_audio`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setText(data.transcribed_text);
      setCategories(data.classification);
      // console.log(data);
      setAllowSubmit(true);
    } catch (err) {
      console.log(err);
    }
  };

  const getVolunteers = async (categories: string) => {
    try {
      if (!process.env.NEXT_PUBLIC_SERVER_URL) return;
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/request/classify`,
        {
          categories,
        }
      );
      // console.log(data);
      localStorage.setItem("volunteers", JSON.stringify(data.classify));
      void Router.push("/volunteers");
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    // console.log(recorderControls.recordingBlob);
    void classifyAudio(recorderControls.recordingBlob);
  }, [recorderControls.stopRecording]);

  return (
    <>
      <div className="mb-10 flex items-center">
        <div className="mx-[10%] flex flex-col lg:w-1/2 ">
          <h1 className="text-4xl font-bold lg:text-6xl">
            Please tell us what you need!
            <br /> We are <span className="text-[#444BD3]">here to help.</span>
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <textarea
              className="mt-10 h-40 w-full rounded-md border-2 border-[#444BD3] p-5  "
              placeholder="Enter your message here"
              id="textarea"
              name="textarea"
              value={formik.values.textarea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="submit"
              className="mx-auto mt-2 flex w-full items-center justify-center rounded-md bg-[#444BD3] px-5 py-3 text-white"
            >
              <p className="ml-2">Request Task</p>
            </button>
          </form>
          <p className="my-5 text-center text-2xl  font-semibold">OR</p>
          <button className="mx-auto flex w-full items-center justify-center rounded-md bg-[#444BD3] px-5 py-3 text-white">
            <AudioRecorder
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
            {/* <svg
            className="mr-2 inline-block"
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
          </svg> */}
            <p className="ml-2">Voice Prompt</p>
          </button>
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
      {open && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-x"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-headline"
                  >
                    Request
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This is your request
                    </p>
                  </div>
                  <textarea
                    className="mt-2 h-32 w-full rounded-md border-2 border-gray-300 p-2"
                    value={text}
                    disabled
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  disabled={!allowSubmit}
                  onClick={() => {
                    setIsOpen(false);
                    setAllowSubmit(false);
                    // void getVolunteers(categories);
                    void Router.push("/volunteers");
                  }}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#56B280] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#3E8E6B] focus:outline-none focus:ring-2 focus:ring-[#56B280] focus:ring-offset-2 sm:text-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
