import React from 'react'

function Education() {
    const years = ['2014-currect','2023-current']
    const text = ['I have been attending school since 2014, and I will graduate in one year.','I have been studying at the Academy &quot;GOA&quot; since 2023, and I will graduate in one year.']
    const numbers = [1,2,3,4,5]
  return (
    <div className='bg-gradient-to-r from-[#31242e]  via-[#31242e] to-[#33132b] w-[100%] p-[35px] py-[100px] h-[650px] relative rounded-[50px]'>
        <div className='flex justify-center items-center'>  
        <div className='absolute top-[5%]'>
            {numbers.map((item,index) => (
                <div key={index}>
                    <div className={`${index % 2 === 0 ? 'w-[5px] h-[145px] bg-[rgb(254,0,202)]' : 'w-[15px] h-[15px] rounded-[50%] bg-[rgb(254,0,202)] shadow-[0px_0px_25px_rgb(245,0,202)] translate-x-[-35%]' }`}></div>
                </div>
            ))}
        </div>

        <div className='flex flex-col justify-start gap-[20px]'>
            {years.map((item,index) => (
                <div key={index} className={`${index % 2 === 0 ? 'translate-x-[-70%]' : ''} ${index % 2 === 1 ? 'translate-x-[70%]' : ''} translate-y-[25%] flex flex-col gap-[10px]`}>
                    <p className='text-white text-[18px]'>{item}</p>
                    <div className={` border-[rgb(174,21,144)] border-[2px] p-2 shadow-[0px_0px_10px_rgb(174,21,144)] rounded-[5px] h-auto w-[150px] sm:w-[200px] md:w-[250px] lg:w-[350px]`}>
                        <p className='text-white'>{text[index]}</p>
                    </div>
                </div>
            ))}
        </div>

        </div>
    </div>
  )
}

export default Education


