import React from "react";

const What = () => {
  return (
    <div id="what-i-do">
      <div className="bg-neutral-800 pb-28 pt-48">
        <div>
          <h1 className="text-center text-5xl font-semibold text-white">
            WHAT I DO
          </h1>
        </div>
        <div className="mx-5 lg:mx-32 lg:flex">
          <div className="mt-16 flex">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 cursor-pointer rounded-full p-3 text-red-400 outline outline-white hover:bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div className="lg:mx-14 ml-7">
              <h1 className="text-3xl font-semibold text-white">
                Responsive Mobile
              </h1>
              <p className="mt-6 text-xl text-gray-400">
                Kanak CSS Template is designed by templatemo. Download, edit and
                use this layout.
              </p>
            </div>
          </div>

          <div className="mt-16 flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 cursor-pointer rounded-full p-3 text-red-400 outline outline-white hover:bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
            <div className="lg:mx-14 ml-7">
              <h1 className="text-3xl font-semibold text-white">
                CSS Templates
              </h1>
              <p className="mt-6 text-xl text-gray-400">
                We provide a wide range of HTML5 templates for free. Please
                spread a word about us on social media.
              </p>
            </div>
          </div>

          <div className="mt-16 flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 cursor-pointer rounded-full p-3 text-red-400 outline outline-white hover:bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
            <div className="lg:mx-14 ml-7">
              <h1 className="text-3xl font-semibold text-white">
                UI & UX Design
              </h1>
              <p className="mt-6 text-xl text-gray-400">
                Credits go to Pixabay and Unsplash for images used in this free
                CSS website template.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
