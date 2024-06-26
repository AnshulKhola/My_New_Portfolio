import React from "react";
import { AiFillTwitterCircle, AiFillGithub,AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume3.pdf";
import {SiLeetcode} from "react-icons/si";
import {SiGeeksforgeeks} from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const handleEmailButtonClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // If it's a mobile device, open the default mail client
      window.location.href = "mailto:golukhola18@gmail.com";
    } else {
      // If it's not a mobile device, open Gmail in the default browser
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=golukhola18@gmail.com",
        "_blank"
      );
    }
  };

  return (
    <div id="home" className={` `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-semibold sm:text-[2rem] font-[]"
            >
              Hey, I'm{" "}
              <span className="text-yellow- font-bold font-mono">
                Anshul Khola
              </span>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Full Stack Developer", 2000," "]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Final-year student at NIT Kurukshetra.{" "}
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/anshulkhola/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1 relative">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >

              <li>
                <a href="https://twitter.com/AnshulKhola18">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/anshulkhola18/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>

              <li>
                <a href="https://github.com/AnshulKhola">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/anshulkhola/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>


              <li>
                <a href="https://leetcode.com/AnshulKhola/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <SiLeetcode className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>

              <li>
                <a href="https://auth.geeksforgeeks.org/user/golukh5ec1" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <SiGeeksforgeeks className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>

               <li>
                <a href="https://www.codechef.com/users/anshulkhola18" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <SiCodechef className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[80%] w-fit flex items-center sm:items-end">
            <div className="h-[80%] md:h-[95%]">
              <img
                loading="lazy"
                // data-aos="fade-up"
                className="image h-[450px] w-[450px] md:h-[300px] md:w-[300px]  overflow-hidden object-cover  md:m-auto sm:m-0"
                src="https://res.cloudinary.com/dbyf2dydg/image/upload/v1718887149/Anshul_Image_ytbxqe.jpg"
                // src={mine}
                alt="mine"
              />
            </div>
            <div className=" absolute bottom-20 md:bottom-3 right-2 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  loading="lazy"
                  className=" w-[120px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mail button */}
      <div className="fixed bottom-10 right-10 sm:right-5 sm:bottom-5 bg-yellow-500 w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center rounded-full z-20 animate-bounce">
        <button
          data-aos="fade-up"
          data-aos-duration="1200"
          onClick={handleEmailButtonClick}
          className="box font-medium text-white  flex items-start justify-center gap-1"
        >
          <MdEmail className=" rotate-[15deg] text-white text-3xl sm:text-2xl hover:scale-110 cursor-pointer" />
          {/* <p>Email</p> */}
        </button>
      </div>
    </div>
  );
};

export default Hero;
