import React, { useState } from 'react';
import {BsJustify, BsXLg} from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1300px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-black'>W.</h1>
      <ul className='hidden text-black md:flex'>
        <li className='p-4 text-lg'>Home</li>
        <li className='p-4 text-lg'>Company</li>
        <li className='p-4 text-lg'>Resources</li>
        <li className='p-4 text-lg'>About</li>
        <li className='p-4 text-lg'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <BsXLg size={30}/> : <BsJustify size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full bg-white text-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      
           <li className='p-5 text-lg'><a href="">New</a></li>
           <li className='p-5 text- text-lglg'><a href="">Popular</a></li>
           <li className='p-5 text-lg'><a href="">Home</a></li>
           <li className='p-5 text-lg'><a href="">Trending</a></li>
           <li className='p-5 text-lg'><a href="">Categories</a></li>
      </ul>
    </div>
  );
};

export default Navbar;