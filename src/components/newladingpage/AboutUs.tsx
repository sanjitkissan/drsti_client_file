import React, { useState } from 'react';
import { web2 } from '@/src/assets/newladingpage';
import { aboutusArr } from '@/src/utils/newlandingpage';
import AboutUsCard from '../card/AddLandingpage/AboutUsCard';
function AboutUs() {
   const [isActiveIndex, setIsActiveIndex]=useState<number>(1)
    return (
        <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-10 my-24">
        <div>
          <h1 className="text-4xl text-black font-bold text-center uppercase">
          Why Workplace <span className='text-red-600'>Marketing?</span>
          
          </h1>
          <p className="text-black text-lg my-2 w-full text-center">Workplace marketing is a powerful strategy that leverages various marketing techniques to promote a business or brand within office spaces to reach out and actively engage with working professionals. This type of advertising uses a range of mediums such as static media, digital media, and on-ground activation solutions to engage with these upscale corporate professionals in clutter-free work environments. Workplace marketing has demonstrated great success in directly reaching influential decision-makers in specialized markets, resulting in higher sales and lasting brand loyalty.</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 ">
          {
            aboutusArr.map((val:any,index:number)=>(

            <span className={`${isActiveIndex == index && " border-2 !border-red-600 text-red-600"} center rounded-md hover:text-black text-black-600 border-transparent cursor-pointer  border-2 hover:border-black px-20 py-4 hover:scale-95  shadow-lg shadow-red-100/50 !transition-all !duration-500 !ease-in-out`} key={val.id}
            onClick={()=>{
              setIsActiveIndex(index)
            }}
            > 
              <button className="  text-lg">{val.title}</button>
            </span>
            ))
          }

          </div>
          <div className='w-full'>
            {
              <AboutUsCard item={aboutusArr[isActiveIndex].list}/>
            }
          </div>

        
      </section>
    );
}

export default AboutUs;