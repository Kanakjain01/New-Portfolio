import React from "react";
// import unsplash from "../Images/home/unsplash.jpg"
// import kanak from "../Images/home/kanak.jpeg"
const Home = () => {
  return (
    <div className="home-heading text-center ">
      <div>
        <h1 className="pt-24 text-3xl text-white font-bold lg:text-4xl">
          Simple and Elegant
        </h1>
        <button className="mt-14 border-4 border-red-400 px-12 py-6 font-mono text-6xl tracking-wider text-red-400 lg:px-20 lg:py-6">
          Kanak
        </button>
      </div>

      <div className="mx-14">
        <h1 className="animate-text-change mt-20 font-serif text-5xl text-white lg:text-4xl h-24"></h1>
        <p className="mt-10 text-xl font-serif leading-6 text-white lg:mx-96">
          My interests are in Front End Engineering, and I love to create
          beautiful and performant products with delightful user experiences.
        </p>
        <button className="mt-10 text-2xl rounded border-2 px-12 py-5 text-white hover:border-red-400 hover:bg-red-400">
          <a href="#what-i-do"> Get started</a>
        </button>
      </div>
      <div className="flex fixed h-22 bottom-8 left-8 w-fit flex-col justify-evenly z-10  ">
      <button class="  inline-flex items-center justify-center p-0.5  mb-2 mr-2 overflow-hidden text-sm font-medium  group bg-gradient-to-br from-pink-900 to-gray-900 group-hover:from-pink-900 group-hover:to-gray-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
          <a href="https://in.docworkspace.com/d/sIAaPpsS-Ae7i0KQG">
          <span class="relative text-xl px-6  transition-all ease-in duration-75 bg-gradient-to-br from-pink-900 to-gray-900  text-white rounded-md group-hover:bg-opacity-0 hover:text-black">
              RESUME
            </span>
          </a>
        </button>

        <button class="  inline-flex items-center justify-center p-0.5  mb-2 mr-2 overflow-hidden text-sm font-medium  group bg-gradient-to-br from-pink-900 to-gray-900 group-hover:from-pink-900 group-hover:to-gray-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
          <a href="https://in.docworkspace.com/d/sIAaPpsS-Ae7i0KQG">
          <span class="relative text-xl px-6  transition-all ease-in duration-75 bg-gradient-to-br from-pink-900 to-gray-900  text-white rounded-md group-hover:bg-opacity-0 hover:text-black">
              CV
            </span>
          </a>
        </button>
      </div>

      
    </div>
  );
};

export default Home;
