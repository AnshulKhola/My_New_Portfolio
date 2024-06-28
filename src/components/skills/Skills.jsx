import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skill
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={95} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"TailwindCSS"}
                  value={90}
                />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<SiTypescript />} name={"TypeScript"} value={85} />
                <ProgressBar
                  logo={<TbBrandNextjs />}
                  name={"Next.js"}
                  value={82}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5  gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10 ">
              <SkillBox
                logo={<div className=" p-2 bg-white rounded-full"><FaReact className="text-black p-[2px]" /></div>}
                black={"white"}
                white={"black"}
                skill={"React"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"black"}
                white={"white"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10 mt-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express.js"}
              />
              <SkillBox
                className=""
                logo={
                  <FaNode className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"white"}
                white={"black"}
                skill={"Node.js"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
