import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="bg-black px-5 pb-44 pt-44 lg:flex lg:justify-evenly lg:p-24 lg:w-[1005] lg:pt-48">
        <div className="lg:w-[55%]">
          <h1 className="text-5xl font-semibold text-white">ABOUT ARPIT</h1>
          <h2 className="mt-6 text-2xl font-bold text-red-400">
            DEVELOPER & DESIGNER
          </h2>
          <p className="mt-10 text-xl text-gray-400 lg:text-lg">
            I'm{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 ">
              {" "}
              {/* KANAK JAIN */}
              ARPIT RATHORE
            </a>
            , an alumnus with a BTech in Computer Science and a co-founder of
            SeventhEase, a thriving startup. My academic odyssey has kindled an
            unquenchable fascination with technology. The vast uncharted
            territories of computer science beckon to me, promising limitless
            opportunities. Armed with an invigorating perspective in this
            ever-evolving domain, I stand ready to assimilate knowledge and
            nurture proficiency by embracing intricate ventures.
            <br />
            <br />
            My academic escapades have laid the bedrock of a robust programming
            language foundation. I've plunged into an array of projects spanning
            the realms of web development, crafting mobile applications, and
            deciphering data's hidden tales. These immersive experiences have
            not only honed my skills but also enriched my perspectives. The
            siren call of innovation and boundless creativity drives me to seek
            an ecosystem that mirrors these very ideals.
          </p>
          {/* <br /> */}
          <p className="mt-10 text-xl text-gray-400 lg:text-lg">
            My prowess extends gracefully to programming languages, libraries,
            and frameworks such as{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 ">
              {" "}
              HTML, CSS, JavaScript, React, and Node.js.{" "}
            </a>
            Trusty companions like{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 ">
              Git, GitHub, and
            </a>
            , and{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 lg:gap-x-2">
              Visual Studio 
            </a>
            are my guides. Unwavering in my ardor for learning, I'm an eager
            newcomer determined to master novel skills. My journey spills beyond
            the classroom, embracing coding contests and contributing to
            open-source realms.
            <br />
            Confidently, I assert that my unbridled zest for learning,
            harmonized with my technical finesse, positions me uniquely to usher
            profound contributions into any project or collective endeavor.
          </p>
        </div>

        <div className="mt-12 lg:w-[35%] lg:mt-28">
          <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">HTML</span>
              <span className="text-lg font-medium dark:text-white">100%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">CSS</span>
              <span className="text-lg font-medium dark:text-white">100%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">
                JAVASCRIPT
              </span>
              <span className="text-lg font-medium dark:text-white">75%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">
                REACT JS
              </span>
              <span className="text-lg font-medium dark:text-white">75%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">
                BOOTSTRAP
              </span>
              <span className="text-lg font-medium dark:text-white">100%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">
                TAILWIND CSS
              </span>
              <span className="text-lg font-medium dark:text-white">100%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">
                GITHUB
              </span>
              <span className="text-lg font-medium dark:text-white">100%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          {/* <div className="mt-9">
            <div className="mb-1 flex justify-between">
              <span className="text-xl font-medium dark:text-white">
                VISUAL STUDIO
              </span>
              <span className="text-lg font-medium dark:text-white">95%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
