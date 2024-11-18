import React from 'react'
import Image from 'next/image'
import vs from '../../public/vs.png'
import gihub from '../../public/github-logo.png'
import taiwlind from '../../public/pngwing.com.png'



function Tools() {
    const images = [vs,gihub,taiwlind]
    const names = ['Visual Studio Code','GitHub','Tailwind CSS']
    return (
         <div className='w-[100%] lg:w-[95%] bg-gradient-to-r from-[#40373e] to-[#4a2842] p-[25px] flex flex-col gap-[20px] rounded-[50px]'>
            <button className="justify-center py-4 px-8 rounded-[50px] text-white bg-gradient-to-r from-[#31242e] to-[#33132b] w-[150px]">Development</button>
            <h1 className='text-white text-[20px]'>I have a preference for clean and am always open to exploring new frameworks and libraries. The tools I commonly use for React development include:</h1>
            <p className='text-blue-400 text-[20px] font-bold'>Tools</p>
            <div className='flex flex-col gap-[20px] items-start sm:flex-row'>
                {images.map((item,index) => (
                    <div key={index} className='bg-gradient-to-r from-[#5b4657] to-[#4f1f43] pt-4 rounded-[50px] w-[95%]'>
                        <button className='flex gap-[10px] justify-center items-center py-2 pb-[20px] px-8 text-white'><Image src={item} width={28} height={28} style={index === 1 ? {filter:'invert(1'} : {}} />{names[index]}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tools