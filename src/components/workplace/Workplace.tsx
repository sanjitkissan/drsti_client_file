import {  wpImg1, wpImg2, wpImg3 } from '@/src/assets/workplace';
import { WorkplaceArr } from '@/src/utils/workplace';
import React from 'react';
import Slider from 'react-slick';
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
function Workplace() {
    return (
        <section className="w-full main-container grid grid-cols-1 lg:grid-cols-2 lg:my-24 mb-12 gap-6 ">
            {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:h-[60vh] h-auto overflow-hidden">
                <div className='center'>
                <img src={wpImg1.src} alt="" className=" w-72 h-72" />
                </div>
                <div className='center'>
                <img src={wpImg2.src} alt=""  className="  z-30 w-72 h-72"/>
                </div>
                <div className='lg:col-span-2 center lg:-ml-10 lg:-mt-8'>
                <img src={wpImg3.src} alt="" className=" z-50 w-72 h-72 "/>
                </div>
            </div> */}
            <div className='w-full h-full py-4 mt-8'>
            <Slider {...settings}>
                {
                    WorkplaceArr.map((item)=>(
                        <img src={item.img.src} alt="" key={item.id} className="w-full h-full object-cover"/>
                    ))
                }
            </Slider>
            </div>
            <div className="w-full flex flex-col items-start p-4 justify-center gap-4">
                <p className=" text-red-600">Peer-to-Peer Interactions</p>
                <h1 className="text-2xl lg:text-4xl font-bold tracking-wider uppercase ">WorkPlace</h1>
                <p className="lg:text-lg  text-black">Millennials or Gen Y constitute 50% of today s working professionals and this number is projected to reach over 75% by the year 2025. This ever-evolving and aspirational workforce thrives on an ecosystem of modern workplaces with a strong sense of community and employee engagement</p>
                <span className="w-full flex items-center justify-start gap-8">
                    {/* <span className="p-4 rounded-full border-4 border-red-600">
                        <h1 className="text-2xl ">3.5d</h1>
                    </span> */}
                    <span>
                        <p className=" text-black lg:text-lg">Happy people are an essential part of every living, breathing habitat. Studies show that 90% of corporate professionals find a fun work environment extremely motivating and have shown increased productivity</p>
                    </span>
                </span>
                <span className="w-full flex items-center justify-start gap-8">
                    {/* <span className="p-4 rounded-full border-4 border-red-600">
                        <h1 className="text-2xl font-bold">96%</h1>
                    </span> */}
                    <span>
                        <p className=" text-black lg:text-lg">With our many industry-first initiatives and innovations, we offer unparalleled solutions to the campus managements that add to the fun and vibrancy of the workplace and elevates the overall experience for the working professionals</p>
                    </span>
                </span>
                <span className="w-full flex items-center justify-start gap-8">
                    {/* <span className="p-4 rounded-full border-4 border-red-600">
                        <h1 className="text-2xl font-bold">39y</h1>
                    </span> */}
                    <span>
                        <p className=" text-black lg:text-lg">All this, while generating incremental revenue to the campus management through our corporate brand partnerships</p>
                    </span>
                </span>
            </div>
        </section>
    );
}

export default Workplace;