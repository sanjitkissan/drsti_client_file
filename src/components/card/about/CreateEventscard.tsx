import { createimg } from '@/src/assets/aboutpage';
import { createArrType } from '@/src/types';
import { type } from 'os';
import React from 'react';
type prop = {
    item: createArrType;
  };
function CreateEventscard({item}:prop) {
    return (
        <section className='w-full h-full flex flex-col items-center justify-center gap-4'>
             <div className='h-80 overflow-hidden'>
                 <img src={item.img.src} alt="" className="w-full h-full object-cover" />
             </div>
             {/* <div className='w-full h-52 bg-black center'>
                <h1 className='text-white text-lg font-bold'>photo not provided by client</h1>
             </div> */}
             <h1 className="text-black text-2xl font-bold">{item?.title}</h1>
             <p className='text-black text-lg'>{item?.content}</p>
        </section>
    );
}

export default CreateEventscard;