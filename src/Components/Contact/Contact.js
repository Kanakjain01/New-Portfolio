import React from "react";

const Contact = () => {
  return (
    <div className="bg-neutral-800 pb-12 pt-28 lg:flex lg:w-[100%] lg:pl-44  px-5">
      <div className=" pt-28 lg:w-[45%] ">
        <div>
          <h1 className="text-5xl font-semibold text-white">CONTACT ME</h1>
        </div>
        <div className="mt-20 w-[100%] lg:pl-12 ">
          <div className="mt-6 flex  ">
            <div class="  hover:animate-pulse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 cursor-pointer rounded-full p-3 text-red-400 outline outline-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div class="ml-4">
              <h1 className=" text-xl mt-2 text-gray-500">86********</h1>
            </div>
          </div>
          <div className="mt-6 flex  ">
            <div class="   hover:animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 cursor-pointer rounded-full p-3 text-red-400 outline outline-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div class="ml-4">
              <h1 className=" text-xl mt-2 text-gray-500">
                kanakjain639@gmail.com
              </h1>
            </div>
          </div>
          <div className="mt-6 flex  ">
            <div class="  hover:animate-pulse ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 cursor-pointer rounded-full p-3 text-red-400 outline outline-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div class="ml-4">
              <h1 className=" text-xl text-gray-500 mt-2">
                Agra , U.P , India
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-20 lg:w-[45%] mx-auto">
        <div className="mt-9 ">
          <input
            className="h-16 w-80 border border-x-2 border-y-2 px-9 text-2xl focus:outline-none lg:w-10/12  "
            type="name"
            name="your_name"
            id="your_name"
            placeholder="Your Name"
          />
          <input
            className="mt-10 h-16 w-80 border border-x-2 border-y-2 px-9 text-2xl focus:outline-none lg:w-10/12 "
            type="email"
            name="your_email"
            id="your_email"
            placeholder="Your Email"
          />

          <textarea
            className="mt-10 w-80 border border-x-2 border-y-2 px-9 pt-4 text-2xl lg:w-10/12 "
            name="mesaage"
            id=""
            cols="20"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          {/* <!-- <input className="hover: mx-5 mt-10 h-96 w-11/12 pb-80  cursor-pointer border border-x-2 border-y-2 px-9 text-2xl focus:outline-none" type="name" name="your_name" id="your_name" placeholder="Message" /> --> */}
          <button className="mt-10 h-16 w-80 cursor-pointer bg-red-400 px-9 py-3 text-xl text-white lg:w-10/12  hover:bg-white hover:text-red-400">
            SEND ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
