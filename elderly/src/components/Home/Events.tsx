import { type eventsData, type event } from "@/types/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import image from "./image.svg"
import Image, { StaticImageData } from "next/image";

function Events() {
  const [events, setEvents] = useState<event[]>([]);

  const getEvents = async () => {
    try {
      if (!process.env.NEXT_PUBLIC_SERVER_URL) return;
      const { data } = await axios.get<eventsData>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/event/findall`
      );
      // console.log(data);
      if (data.status === "success") setEvents(data.events);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void getEvents();
  }, []);

  return (
    <div id="events" className="mx-[10%] my-10">
      <h1 className="text-left text-3xl font-bold text-[#444BD3] lg:text-5xl">
        Events
      </h1>
      <div className="my-10 flex flex-col items-center gap-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <p className="text-3xl font-bold lg:text-5xl">
            When our customers win, we win too.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-xl text-gray-500 lg:text-2xl">
            See how our partnered NGOs collaborate and engage the elderly in the
            society.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-lg md:flex-row">
        {events.map((event, index) => (
          <div
            key={index}
            className="about-box flex flex-col justify-center rounded-xl min-h-[500px] w-1/3 "
          >
            <Image src={image as StaticImageData} alt="hero" width={500} height={500}  />

            <p className="my-2 px-4 text-xl font-bold uppercase h-[56px]">
              {event.title}
            </p>
            <p className="px-4 pb-8 h-[144px]">{`${event.description}...`}</p>
            <p
              className="mb-4 flex items-center px-4 text-2xl font-semibold text-[#444BD3] cursor-pointer"
              onClick={() => {
                localStorage.setItem("data", JSON.stringify(event));
                void Router.push("/event");
              }}
            >
              Join the Event
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 inline-block"
              >
                <path
                  d="M13.5774 13.5774C13.252 13.9028 13.252 14.4305 13.5774 14.7559C13.9028 15.0814 14.4305 15.0814 14.7559 14.7559L18.9226 10.5893C19.248 10.2638 19.248 9.73618 18.9226 9.41075L14.7559 5.24408C14.4305 4.91864 13.9029 4.91864 13.5774 5.24408C13.252 5.56951 13.252 6.09715 13.5774 6.42259L16.3215 9.16667H1.66667C1.20643 9.16667 0.833336 9.53976 0.833336 10C0.833336 10.4602 1.20643 10.8333 1.66667 10.8333H16.3215L13.5774 13.5774Z"
                  fill="#444BD3"
                />
              </svg>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
