import { solutionsArr } from '@/src/utils/workplace';
import React from 'react';
import OursolutionsCard from '../card/workplace/OursolutionsCard';

function Oursolutions() {
    return (
        <section className='w-full main-container flex flex-col items-center justify-between overflow-hidden'>
             <h1 className="font-bold text-2xl lg:text-4xl text-black tracking-wide  uppercase">Our <span className='text-red-600'>Solutions</span></h1>
             <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-6 ">
                {
                    solutionsArr.map((item)=>(
                        <div key={item.id}>
                            <OursolutionsCard item={item}/>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Oursolutions;

