import React from "react";
import Myimage from "../assets/myimage.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-gradient-to-b from-[#FAF9F6] to-[#F5F5DC] py-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-10">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-5xl sm:text-8xl font-black text-[#3E2723] leading-tight">
            Software <span className="text-[#C5A059]">Developer</span>
          </h2>
          <p className="py-6 max-w-md text-[#5D4037] text-lg leading-relaxed">
            I am a full-stack engineer with 1+ years of experience crafting high-performance web solutions. 
            Passionate about building seamless digital experiences using React, Node.js, and modern cloud architectures.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="group text-white w-fit px-8 py-4 my-2 flex items-center rounded-full bg-[#3E2723] cursor-pointer hover:scale-105 duration-300 shadow-xl shadow-[#3E2723]/20">
              View Work
              <span className="group-hover:translate-x-2 duration-300 ml-2">→</span>
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] to-[#3E2723] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={Myimage}
            alt="my profile"
            className="relative rounded-3xl mx-auto w-2/3 md:w-80 shadow-2xl transition-transform duration-500 hover:scale-[1.02] border-2 border-[#EADBC8]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
