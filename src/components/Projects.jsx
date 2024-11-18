import React from 'react'
import Image from 'next/image'
import fb from '../../public/facebook.png'
import linkedin from '../../public/linkedin-big-logo.png'
import gihub from '../../public/github-logo.png'



function Projects() {
  return (
    
    <div id='About Me' className='flex flex-col gap-[10px] justify-center items-center w-[100%] sm:gap-[20px] md:flex-row lg:gap-[50px]'>
        <div className='flex flex-col gap-[20px] w-[100%] sm:w-full'>
                <button className="justify-center py-4 px-8 rounded-[50px] text-white bg-gradient-to-r from-[#31242e] to-[#33132b] w-[150px] ml-8">My Projects</button>
                <div className='flex flex-col gap-[20px] bg-gradient-to-r from-[#31242e] to-[#33132b] p-[45px] rounded-[35px] w-full lg:w-[100%]'>
                    <button className='bg-gradient-to-r from-[#3a2c37] to-[#3e1534] w-[150px] rounded-[50px] py-2 border-[1px] border-[rgb(98,155,182)] text-blue-400'>About Me</button>
                    <p className='text-white text-[22px]'>Nice to meet you I'M Nika</p>
                    <p className='text-white text-[18px]'>I'm A Web Developer.I'm Mainly A Front end WebDeveloper.</p>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex gap-[20px]'>
                        <button className='w-[49%] sm:w-full bg-gradient-to-r from-[#5b4657] to-[#4f1f43] py-2 rounded-[20px] flex justify-center items-center gap-[8px] lg:gap-[20px] text-white hover:shadow-[0px_0px_10px_rgb(255,255,255)] duration-200'><Image src={gihub} width={25} height={25} className='invert' /> <p className='block xl:hidden'>Github</p> <p className='hidden xl:block'>My Github Account</p></button>
                        <button className='w-[49%] sm:w-full bg-gradient-to-r from-[#5b4657] to-[#4f1f43] py-2 rounded-[20px] flex justify-center items-center gap-[5px] lg:gap-[20px] text-white hover:shadow-[0px_0px_10px_rgb(255,255,255)] duration-200'><Image src={fb} width={25} height={25} className='invert' /><p className='block xl:hidden'>Facebook</p> <p className='hidden xl:block'>My Facebook Account</p></button>
                    </div>
                    <button className='w-full bg-gradient-to-r from-[#5b4657] to-[#4f1f43] py-2 rounded-[20px] flex justify-center lg:justify-center items-center gap-[8px] lg:gap-[20px] text-white hover:shadow-[0px_0px_10px_rgb(255,255,255)] duration-200 '><Image src={linkedin} width={25} height={25} className='invert' /><p className='block lg:hidden'>Linkedin</p> <p className='hidden lg:block'>My Linked In Account</p></button>
                </div>
                </div>
        </div>

        <div className='w-[100%] lg:w-[35%] bg-gradient-to-r from-[#31242e] to-[#33132b] p-[45px] rounded-[35px] h-[350px] translate-y-[35px] flex justify-center items-center '>
            <div className='bg-[#382934] p-[20px] flex justify-center items-center rounded-[35px]'>
                <Image src='/photo.jpg' width={200} height={200} className='rounded-[35px] md:w-[250px]' />
            </div>
        </div>
    </div>
  )
}

export default Projects
