import React from 'react';
import Image from 'next/image';
import vs from '../../public/vs.png';
import react from '../../public/react.png';
import tailwind from '../../public/pngwing.com.png';

function ProjectsList() {
    const images = [vs, react, tailwind];
    const toolNames = ['Visual Studio Code', 'React', 'Tailwind CSS'];
    const text = [
        "This is a clone of a construction company website created using React and Tailwind CSS. The project is a multi-page React application that imitates the official website of a real construction company. The site includes several pages, including the homepage, services page, completed projects, and contact page. It reflects the company's branding, design, and style, with Tailwind CSS providing a refined interface. The website also features detailed descriptions of the company's services and showcases completed projects. Additionally, the contact form allows users to leave their contact information.",
        "This fitness page is created with Tailwind CSS, providing a modern and user-friendly interface. On the page, users can view prices, schedules, and information about available visiting days. The fitness center is designed for all ages and genders — men, women, and children — allowing everyone interested to easily access information about the services. Tailwind CSS ensures a clean, mobile-friendly design for a seamless user experience."
    ];
    const names = ["Archi", "Fitness"];

    return (
        <div id='Project' className='w-[100%]'>
            <h1 className='text-white text-[22px] font-semibold mb-12'>Projects With React</h1>
            <div className='flex flex-col gap-[35px] w-full'>
                {names.map((item, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'flex-row-reverse' : ''} gap-[35px] items-center justify-center xl:flex-row`}>
                        <div className='bg-gradient-to-r from-[#40373e] to-[#4a2842] w-[100%] p-[20px] rounded-[50px] flex flex-col gap-[25px] justify-center items-center pb-[100px] pt-[50px] xl:w-[60%]'>
                            <p className='text-white text-[25px]'>{item}</p>
                            <p className='text-white max-w-[90%] leading-7'>{text[index]}</p>
                            <div className='flex flex-col flex-wrap gap-[20px] justify-center items-center w-[1500px] xl:flex-row xl:w-[100%]'>
                                {images.map((img, imgIndex) => (
                                    <button key={imgIndex} className='flex gap-[10px] justify-center items-center py-[20px] w-[17%] text-white bg-gradient-to-r from-[#5b4657] to-[#4f1f43] rounded-[50px] sm:w-[35%]'><Image src={img} width={28} height={28} />{toolNames[imgIndex]}</button>
                                ))}
                            </div>
                        </div>
                        <div className={`bg-gradient-to-r from-[#411f3a] to-[#291725] w-[100%] h-[500px] flex justify-center items-center rounded-[50px] xl:w-[700px]`}>
                            <Image src={index % 2 === 0 ? '/archi.jpg' : '/fitness.jpg'} width={index % 2 === 0 ? 450 : 450} height={index % 2 === 0 ? 450 : 450} className='rounded-[50px] w-[80%] h-[80%] object-cover' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsList;
