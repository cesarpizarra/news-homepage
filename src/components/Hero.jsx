import React from "react";
import Image from "../assets/image-web-3-desktop.jpg";
 
const Hero = () => {
  return (
    <div className="w-full md:flex items-center justify-center  px-[2rem] gap-2 ">
      {/* Left Side */}
      <div className="max-w-7xl p-2">
        <img src={Image} className="w-[100%]" />
        <div className="md:flex justify-evenly mt-5">
          <h1 className="font-bold text-4xl ">The Bright Future of Web 3.0?</h1>
          <p className="text-gray-500">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
            <button className=" block bg-[#131741] text-white p-2 w-2/6 mt-[20px] hover:bg-orange-600 duration-300">
              READ MORE
            </button>
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-[#131741] p-8">
        <h1 className="text-orange-300 text-4xl font-bold">New</h1>
        <div className="mt-[45px]">
          <p className="text-white font-bold">Hydrogen VS Electric Cars</p>
          <p className="text-white font-thin">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="border border-gray-600 mt-4" />
        </div>
        <div className="mt-[45px]">
          <p className="text-white font-bold">The Downsides of AI Artistry</p>
          <p className="text-white font-thin">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="border border-gray-600 mt-4" />
        </div>
        <div className="mt-[45px]">
          <p className="text-white font-bold"> Is VC Funding Drying Up?</p>
          <p className="text-white font-thin">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
