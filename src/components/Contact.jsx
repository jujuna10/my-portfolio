import React from 'react'

function Contact() {
  return (
    <div id='Contact me' className='bg-gradient-to-r from-[#31242e]  via-[#31242e] to-[#33132b] w-[100%] p-[35px] rounded-[50px] xl:w-[50%]'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-[28px]'>Contact Me</h1>
            <p className='text-white'>if you are interested in a web page contact me using the form below</p>
        </div>

        <form className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[15px] w-[80%] md:w-[90%]'>
                <label htmlFor="#email" className='text-white'>Email Address</label>
                <input type="email" name="emial" id="emial" className='p-[15px] rounded-[50px]' placeholder='email' />
            </div>
            <div className='flex flex-col gap-[15px] w-[80%] md:w-[90%]'>
                <label htmlFor="#subject" className='text-white'>Subject</label>
                <input type="text" name="subject" id="subject" className='p-[15px] rounded-[50px]' placeholder='subject' />
            </div>
            <textarea name="message" placeholder='Write Message' className='p-[15px] rounded-[20px] w-[80%] md:w-[90%]'></textarea>
            <button className='bg-[rgb(151,22,251)] px-9 py-2 w-[20%] rounded-[50px] text-white font-bold flex justify-center items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact