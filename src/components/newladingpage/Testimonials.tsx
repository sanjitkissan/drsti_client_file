import { tesimonialsCardArr } from '@/src/utils/newlandingpage';
import React from 'react';
import TesimonialsServices from '../card/AddLandingpage/TesimonialsServices';

function Testimonials() {
    return (
        <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-4 my-24 ">
        <div>
          <h1 className="text-4xl text-red-600 font-bold text-center uppercase ">
          Testimonials
          </h1>
          <p className="text-black text-lg my-2 "> We are experts in delivering exceptional results to our clients. Partnering with dRSTi will be a game-changer for your brand.</p>
        </div>

        <div className='w-full flex items-center justify-between gap-6'>
     {
       
       tesimonialsCardArr.map((item)=>(
        <div key={item.id}>
            <TesimonialsServices item={item} />

        </div>
     
     ))}
</div>



        </section>
    );
}

export default Testimonials;