import React from "react";

const Project = () => {
  return (
    <div className="bg-neutral-800 pb-28 pt-40">
      <div>
        <h1 className="text-center text-5xl font-semibold text-white">PROJECTS</h1>
      </div>
      <div className="mt-24">
        <div className="mt-9 flex justify-around">
          <div className="container w-60 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
          <div className="container w-60 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
        <div className="mt-9 flex justify-around">
          <div className="container w-60 cursor-pointer">
            <img
              className="h-40 w-60"
              src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
          <div className="container w-60 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
        <div className="mx-3 mt-9">
          <div className="container w-60 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
