import React from "react";

const Home = () => {
  return (
    <div className="home-heading pt-32 text-center ">
      <div>
        <h1 className="pt-24 text-3xl text-white font-bold lg:text-4xl">
          Simple and Elegant
        </h1>
        <button className="mt-14 border-4 border-red-400 px-12 py-6 font-mono text-6xl tracking-wider text-red-400 lg:px-20 lg:py-6">
          Kanak
        </button>
      </div>

      <div className="mx-14">
        <h1 className="animate-text-change mt-20 font-serif text-5xl text-white lg:text-4xl"></h1>
        <p className="mt-10 text-xl font-serif leading-6 text-white lg:mx-96">
          Front-End Developers design and develop websites and web applications
          by using web technologies such as HTML, CSS, DOM, and JavaScript, that
          either run on the Open Web Platform or function as compilation input
          for non-web platform environments like React Native.
        </p>
        <button className="mt-10 text-2xl rounded border-2 px-12 py-5 text-white hover:border-red-400 hover:bg-red-400">
          <a href="#what-i-do"> Get started</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
