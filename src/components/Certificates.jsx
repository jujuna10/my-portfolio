import React from 'react'

function Certificates() {
    const certificates = ['React,js courses - Codeacademy','html,css,js courses - Sololearn']
  return (
    <div className='w-[95%] flex flex-col gap-[20px] lg:w-full'>
        <h1 className='text-white text-[25px]'>I Have Acquired Following Certificates</h1>
        <div className='flex flex-col lg:flex-row gap-[20px]'>
            {certificates.map((item,index) => (
                <button className='bg-gradient-to-r from-[#5b4657] to-[#4f1f43] text-white px-[20px] py-[10px] rounded-[50px] hover:shadow-[0px_0px_10px_rgb(255,255,255)] duration-200'>{item}</button>
            ))}
        </div>
    </div>
  )
}

export default Certificates