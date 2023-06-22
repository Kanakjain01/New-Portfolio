import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="bg-black px-5 pb-44 pt-44 lg:flex lg:justify-around lg:p-24 lg:pt-48">
        <div className="lg:w-[40%]">
          <h1 className="text-5xl font-semibold text-white">ABOUT KANAK</h1>
          <h2 className="mt-6 text-2xl font-bold text-red-400">
            DEVELOPER & DESIGNER
          </h2>
          <p className="mt-10 text-xl text-gray-400">
            My name is{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 ">
              {" "}
              KANAK JAIN
            </a>
            , and I am pursuing a BTech in Computer Science. I have a strong
            passion for technology, and I am excited about the endless
            possibilities that computer science offers. As a fresher in this
            field, I am eager to learn and gain experience by working on
            challenging projects that can help me develop my skills further.
            During my academic years, I have acquired a strong foundation in
            programming languages. I have also worked on various projects that
            have helped me gain hands-on experience in web development, mobile
            application development, and data analysis. I am looking forward to
            leveraging my skills and knowledge to contribute to an organization
            that values innovation and creativity. I believe that my eagerness
            to learn, coupled with my technical skills, can make a significant
            contribution to any project or team.
          </p>
          {/* <br /> */}
          <p className="mt-10 text-xl text-gray-400">
            I have a strong foundation in programming languages such as{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 ">
              {" "}
              HTML , CSS{" "}
            </a>
            , as well as experience with tools and technologies such as{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 ">
              Git, GitHub
            </a>
            , and{" "}
            <a class=" font-bold text-gray-100 hover:text-red-400 ">
              Visual Studio
            </a>
            . As a fresher, I am eager to learn and develop new skills. I have
            also worked on various extracurricular activities and side projects,
            including participating in coding competitions and contributing to
            open-source projects.
          </p>
        </div>

        <div className="mt-12 lg:w-[40%]">
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
              <span className="text-lg font-medium dark:text-white">55%</span>
            </div>
            <div className="mt-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-red-400"
                style={{ width: "55%" }}
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
