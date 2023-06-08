import React from "react";

function Reviews() {
  return (
    <div id="events" className="mx-[10%] my-10">
      <h1 className="text-left text-3xl font-bold text-[#444BD3] lg:text-5xl">
        Reviews
      </h1>

      <div className="flex flex-col gap-4 text-lg md:flex-row">
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
          <p>
            Vaibhav is a compassionate volunteer who selflessly gives his time
            and skills to make a positive impact. His dedication and empathy
            bring joy and support to those he serves in the community.
          </p>
          <p>Rating: 4/5</p>
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
          <p>
            Vaibhav is a compassionate volunteer who selflessly gives his time
            and skills to make a positive impact. His dedication and empathy
            bring joy and support to those he serves in the community.
          </p>
          <p>Rating: 4/5</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
