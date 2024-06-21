import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="container m-auto mt-16">
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-16 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                More Info about me or projects leave a message here
              </h3>
            </div>
          </div>
          <div className="flex p-5 items-center justify-center">
            <button
              data-aos="zoom-in"
              className="text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] bg-white"
            >
              <BsArrowRight className="md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            action="https://formspree.io/f/mzbnnwpe"
            method="POST"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. name@email.com"
              name="email"
              required
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. anshul"
              name="name"
              required
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message here..."
              name="message"
              required
            />
            <button
              className="bg-black hover:text-yellow-400 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-2"
              type="submit"
            >
              <RiSendPlaneFill />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
