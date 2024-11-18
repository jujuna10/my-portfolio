'use client'
import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
    const links = ["Home", "About Me", "Project", "Contact me"]

  return (
    <div className="bg-gradient-to-r from-[#0D0B14] to-[#353244] w-full py-4 rounded-[50px] text-right px-4 mt-[20px]">
        <div className='w-full flex flex-wrap items-center justify-end gap-[20px]  md:gap-[35px]'>
            {links.map((item,index) => (
                <Link key={index} to={item} spy={true} smooth={true} duration={700} className={`${item === 'Home' ? 'text-red-700' : 'text-white'} font-bold`} >{item}</Link>
            ))}
            <button className='bg-[rgb(151,22,251)] px-9 py-2 rounded-[50px] text-white font-bold'>hire Me</button>
        </div>
    </div>
  )
}


export default Navbar