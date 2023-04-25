import { newArrCard } from '@/src/types';
import React from 'react';

type prop={
    item:newArrCard
}
function OurServices({item}:prop) {
    return (
        <section className='flex flex-col items-center justify-center w-full gap-6 hover:scale-[1.1] transition-all duration-300 my-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]'>
      
        <div className=" w-32 h-20 mt-6 ">                                                 
        <img src={ item?.img?.src} alt="img" className='w-full h-full' />
        </div>
        <h4 className='text-2xl  text-red-600'>{item?.title}</h4>
        <p className='text-lg text-center text-black mb-6 '>{item?.content}</p>
       
        </section>
    );
}

export default OurServices;