import React from "react";
import schl1 from "../Images/portfolio/schl1.jpeg";
import ed1 from "../Images/portfolio/ed1.jpeg";
import trade1 from "../Images/portfolio/trade1.jpeg";
import port2 from "../Images/portfolio/port2.jpeg";
const Portfolio = () => {
  return (
    <div className="bg-black px-5 pb-48 pt-40 lg:px-48">
      <div>
        <h2 className="text-5xl font-semibold text-white">PORTFOLIO</h2>
        <h1 className="mt-5 text-2xl text-gray-500">Featured Works</h1>
      </div>
      <div className="mt-40">
        <div className="lg:flex lg:justify-evenly lg:w-[100%]">
          <div className="lg:w-[30%]">
            <a href="https://edtech-web-orpin.vercel.app/">
              <div className="mt-10 scale-95 cursor-pointer duration-500 ease-in hover:scale-100">
                <img className="lg:h-96 lg:w-96" src={ed1} alt="" />
              </div>
              {/* <!-- <button className="text-green-400 border-black p-3 px-52 mx-3 cursor-pointer ">CODE</button> --> */}
              <article className="card mt-6">
                <h3 className="text-red-400">ED.TECH</h3>

                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </article>
            </a>
          </div>
          <div className="lg:w-[30%]">
            <a href="https://sspublic2.vercel.app/">
              <div className="mt-10 scale-95 cursor-pointer duration-500 ease-in hover:scale-100">
                <img className="lg:h-96 lg:w-96" src={schl1} alt="" />
              </div>
              {/* <!-- <button className="text-green-400 border-black p-3 px-52 mx-3 cursor-pointer ">CODE</button> --> */}
              <article className="card mt-6">
                <h3 className="text-red-400">SCHOOL WEBSITE</h3>

                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </article>
            </a>
          </div>
          {/* <div className="lg:w-[30%]">
            <a href="https://github.com/Kanakjain01/newsapp.git">
              <div className="mt-10 scale-95 cursor-pointer duration-500 ease-in hover:scale-100">
                <img
                  className="lg:h-96 lg:w-96"
                  src="https://images.unsplash.com/photo-1575314027842-c33656c1f3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGh0bWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              
              <article className="card mt-6">
                <h3 className="text-red-400">NEWSAPP</h3>

                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </article>
            </a>
          </div> */}
        </div>
        <div className="lg:flex lg:justify-evenly  lg:w-[100%]">
          {/* <div  className="lg:w-[30%]">
            <a href="https://github.com/Kanakjain01/real-estate.git">
              <div className="mt-10 scale-95 cursor-pointer duration-500 ease-in hover:scale-100">
                <img
                  className="lg:h-96 lg:w-96"
                  src="https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGh0bWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
             
              <article className="card mt-6">
                <h3 className="text-red-400">REAL ESTATE</h3>

                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </article>
            </a>
          </div> */}
          <div className="lg:w-[30%]">
            <a href="https://642abab2fe1ad874cb30849b--silver-kelpie-86a961.netlify.app/">
              <div className="mt-10 scale-95 cursor-pointer duration-500 ease-in hover:scale-100">
                <img className="lg:h-96 lg:w-96" src={trade1} alt="" />
              </div>
              {/* <!-- <button className="text-green-400 border-black p-3 px-52 mx-3 cursor-pointer ">CODE</button> --> */}
              <article className="card mt-6">
                <h3 className="text-red-400">TRADEG</h3>

                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </article>
            </a>
          </div>
          {/* <div  className="lg:w-[30%]">
            <a href="https://kanakportfolio.vercel.app/">
              <div className="mt-10 scale-95 cursor-pointer duration-500 ease-in hover:scale-100">
                <img className="lg:h-96 lg:w-96" src={port2} alt="" />
              </div>
              
              <article className="card mt-6">
                <h3 className="text-red-400">PORTFOLIO</h3>

                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
              </article>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
