import React, { useState } from 'react';
import {BsJustify, BsXLg} from 'react-icons/bs'
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='w-full flex items-center justify-between px-[2rem] py-[3rem]'>
        <h1 className='font-bold text-4xl'>W.</h1>
            <ul className='hidden md:flex'>
                <li className='ml-5'><a href="">Home</a></li>
                <li className='ml-5'><a href="">New</a></li>
                <li className='ml-5'><a href="">Popular</a></li>
                <li className='ml-5'><a href="">Trending</a></li>
                <li className='ml-5'><a href="">Categories</a></li>
            </ul>
           <div className='z-10 block md:hidden' onClick={handleNav}>
            {!nav ? <BsXLg size={30} /> : <BsJustify size={30} />}
  
           </div>
           <div className={!nav ? 'fixed right-0 top-0 w-[70%] h-full bg-white ease-in-out duration-500 '  : 'fixed right-[-100%] ease-in-out duration-500 h-full top-0'} >
           <ul className='pt-36 uppercase text-center'>
                <li className='p-4 text-lg'><a href="">New</a></li>
                <li className='p-4'><a href="">Popular</a></li>
                <li className='p-4 text-lg'><a href="">Home</a></li>
                <li className='p-4 text-lg'><a href="">Trending</a></li>
                <li className='p-4 text-lg'><a href="">Categories</a></li>
            </ul>
           </div>
    </div>
  )
}

export default NavBar