import React from 'react'
import Image from 'next/image'
import fb from '../../public/facebook.png'
import instagram from '../../public/instagram.png'
import x from '../../public/twitter.png'
import linkedin from '../../public/linkedin-big-logo.png'




function Introduction() {
    const images = [fb,instagram,x,linkedin]
  return (
    <div className='flex flex-col gap-[60px] w-[100%] md:gap-[100px] lg:flex-row'>
        {/* left */}
        <div className='flex flex-col gap-8 w-full justify-start items-start bg-gradient-to-r from-[#31242e] to-[#33132b] p-8 rounded-[50px]'>
            <div className='flex justify-center items-center'>
                <p className='text-white font-bold text-[18px]'>HEY THERE</p>
                <img src="/waving-hand.png" width={20} height={20} />
                <p className='text-white font-bold text-[18px]'>I AM</p>

            </div>

            <div className='flex flex-col gap-4'>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] to-[#B537F2] text-[32px] lg:text-[55px] md:text-[45px] w-full font-bold max-w-[400px]">Nika Zhuzhunadze</p>
                <p className='text-white text-[20px]'>AND I'M A REACT DEVELOPER!</p>
            </div>
            <button className='bg-[rgb(151,22,251)] px-9 py-2 rounded-[50px] text-white font-bold flex justify-center items-center'>hire Me <img src="/waving-hand.png" width={20} height={20} /></button>
        </div>


        <div className='flex flex-col items-center justify-center w-full lg:w-[50%] gap-[50px]'>
            {/* right */} 
            <div className='bg-gradient-to-l from-[#31242e] to-[#33132b] rounded-[50px] p-8 h-80 flex flex-col gap-[20px] justify-between items-start md:h-[250px]'>
                <p className='text-white text-[22px] md:text-[25px]'>If You Are In Need Of A Web Page Or App Get In Touch And Let Your Ideas Come To Life.</p>
                <button className='bg-[rgb(151,22,251)] px-7 py-[2px] md:py-2 rounded-[50px] text-white font-bold'>Check Out My Projects</button>
            </div>

            {/* right bottom */}
            <div className='flex gap-4 sm:gap-4 flex-wrap'>
                {images.map((item,index) => (
                    <div className='bg-gradient-to-r from-[#31242e] to-[#33132b] p-[10px] rounded-[45px] w-[70px] h-[70px] flex justify-center items-center lg:w-[100px] lg:h-[100px]'>
                        <Image key={index} src={item} width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[25px] h-[25px]' style={{filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(7485%) hue-rotate(176deg) brightness(94%) contrast(109%)'}} />
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Introduction