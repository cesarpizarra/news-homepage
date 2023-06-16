import React, { useState } from "react";
import { BsJustify, BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between items-center h-24 px-5">
      <h1 className="w-full text-3xl font-bold text-black">W.</h1>
      <ul className="hidden text-black md:flex">
        <li className="p-4 text-lg cursor-pointer">Home</li>
        <li className="p-4 text-lg cursor-pointer">Company</li>
        <li className="p-4 text-lg cursor-pointer">Resources</li>
        <li className="p-4 text-lg cursor-pointer">About</li>
        <li className="p-4 text-lg cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <BsXLg size={30} /> : <BsJustify size={30} />}
      </div>
      <ul
        className={
          nav
            ? "flex items-center justify-center flex-col fixed left-0 top-0 w-[80%] h-full bg-white text-black ease-in-out duration-500"
            : " flex items-center justify-center flex-col fixed left-[-100%] top-0 w-[80%] h-full bg-white text-black ease-in-out duration-500"
        }
      >
        <li className="p-5 text-lg">
          <a href="">New</a>
        </li>
        <li className="p-5 text- text-lg cursor-pointer">
          <a href="">Popular</a>
        </li>
        <li className="p-5 text-lg cursor-pointer">
          <a href="">Home</a>
        </li>
        <li className="p-5 text-lg cursor-pointer">
          <a href="">Trending</a>
        </li>
        <li className="p-5 text-lg cursor-pointer">
          <a href="">Categories</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
