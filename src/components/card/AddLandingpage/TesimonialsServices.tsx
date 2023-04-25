import { tesimonialsArrCard } from '@/src/types';
import React from 'react';
type prop={
    item:tesimonialsArrCard
}
function TesimonialsServices({item}:prop) {
    return (
        <section className='flex flex-col items-center justify-center  w-full gap-6 bg-white p-6 py-12 rounded-xl hover:border-2 transition-all duration-300 my-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]'>
        <p className='text-lg  text-black  '>{item?.subtitle}</p>
        
        <span className=" w-full flex items-center justify-start gap-4 ">
            <span className='w-24 h-24'>
            <img src={ item?.img?.src} alt="img" className='w-full h-full rounded-full' />
            </span>
       
            <span >
            <h4 className='text-lg '>{item?.title}</h4>
            <p className='text-lg  text-black  '>{item?.content}</p>
            </span>
        </span>
        
        
        




        </section>
    );
}

export default TesimonialsServices;