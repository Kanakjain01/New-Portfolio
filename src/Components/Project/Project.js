import React from "react";
import School from "../Images/project/School.png";
import Edtech from "../Images/project/Edtech.png";
import Newsapp from "../Images/project/Newsapp.png";
import Realestate from "../Images/project/Realestate.png";
import Tradeg from "../Images/project/Tradeg.png";
const Project = () => {
  return (
    <div className="bg-neutral-800 pb-28 pt-40">
      <div>
        <h1 className="text-center text-5xl font-semibold text-white">
          PROJECTS
        </h1>
      </div>
      <div className="mt-24 lg:hidden">
        <div className="mt-9 flex justify-around">
          <div className="container w-60 p-2 cursor-pointer">
            <img className=" h-44 " src={School} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
          <div className="container w-60 p-2 cursor-pointer">
            <img className=" h-44 " src={Edtech} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
        <div className="mt-9 flex justify-around">
          <div className="container w-60 p-2 cursor-pointer">
            <img className=" h-44 " src={Newsapp} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
          <div className="container w-60 p-2 cursor-pointer">
            <img className=" h-44 " src={Realestate} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
        <div className="mx-3 mt-9">
          <div className="container w-80 p-2 cursor-pointer">
            <img className=" h-44 " src={Tradeg} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 hidden lg:flex  flex-col w-[85%] mx-auto">
        <div className="mt-9 flex justify-between w-[100%] mx-auto  ">
          <div className="container w-[32%] cursor-pointer">
            <img className="h-64" src={Realestate} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
          <div className="container w-[32%] cursor-pointer">
            <img className="h-64" src={Tradeg} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
          <div className="container w-[32%] cursor-pointer">
            <img className="h-64" src={Newsapp} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
        <div className="mt-9 flex w-[100%] justify-between ">
          <div className="container w-[48%] cursor-pointer">
            <img className="w-[100%] h-96" src={School} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
          <div className="container w-[48%] cursor-pointer">
            <img className="w-[100%] h-96" src={Edtech} alt="" />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div>
        {/* <div className="mx-3 mt-9">
          <div className="container w-60 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="overlay opacity-80">
              <div className="text font-bold text-white">Web design</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
