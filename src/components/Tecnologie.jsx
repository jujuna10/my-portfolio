import React from 'react'
import Image from 'next/image'
import vs from '../../public/vs.png'
import html from '../../public/html.png'
import css from '../../public/css.png'
import js from '../../public/js.png'
import react from '../../public/react.png'
import nextjs from '../../public/nextjs.png'
import tailwind from '../../public/pngwing.com.png';



function Tecnologie() {

    const images = [vs,html,css,js,react,nextjs,tailwind]
  return (
    <div className='flex flex-col gap-[20px] justify-start w-[100%]'>
        <p className='text-white text-[28px] pl-8'>Technologies I Use</p>
        <div className='flex flex-wrap gap-[20px] justify-center py-8 px-8 rounded-[50px] md:gap-[20px] sm:gap-4' style={{backgroundImage: "linear-gradient(to right, #31242e 10%, #33132b 80%)"}} >
            {images.map((item,index) => ( 
                <div key={index} className='bg-gradient-to-r from-[#443140] to-[#441a39] w-[70px] h-20 flex justify-center items-center rounded-[25px] md:h-32 sm:w-32 sm:h-24'>
                    <Image alt={`${images[index]}`} src={item} width={35} height={35} className='md:w-[45px] lg:w-[50px] sm:w-[35px]' />
                </div>
            ))}
        </div>


    </div>
  )
}

export default Tecnologie