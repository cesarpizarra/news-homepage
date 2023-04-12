import React from "react";
import Retro from "../assets/image-retro-pcs.jpg";
import Laptop from "../assets/image-top-laptops.jpg";
import Gaming from "../assets/image-gaming-growth.jpg";
const Trending = () => {
  return (
    <div className="w-full mt-5 md:flex items-center justify-center px-[2rem] py-7">
      {/* Reviving Retro */}
      <div className="flex">
        <img src={Retro} alt="Retro" className="w-28 mb-3" />
        <div className="ml-5">
          <p className="text-4xl font-bold text-gray-400">01</p>
          <p className="font-bold text-lg">Reviving Retro PCs</p>
          <p className="font-normal text-gray-500">What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      {/* Top 10 Laptops */}
      <div className="flex">
        <img src={Laptop} alt="Laptop" className="w-28 mb-3" />
        <div className="ml-5">
          <p className="text-4xl font-bold text-gray-400">02</p>
          <p className="font-bold text-lg">Top 10 Laptops of 2022</p>
          <p className="font-normal text-gray-500"> Our best picks for various needs and budgets.</p>
        </div>
      </div>

      {/* The Growth of Gaming */}
      <div className="flex">
        <img src={Gaming} alt="Gaming" className="w-28 mb-3" />
        <div className="ml-5">
          <p className="text-4xl font-bold text-gray-400">03</p>
          <p className="font-bold text-lg">The Growth of Gaming</p>
          <p className="font-normal text-gray-500">How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
     
    </div>
  );
};

export default Trending;
