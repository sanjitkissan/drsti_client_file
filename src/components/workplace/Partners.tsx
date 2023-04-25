import { heroArr } from '@/src/utils/workplace';
import React from 'react'
import PartnersCard from '../card/workplace/PartnersCard';

export default function Partners() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-6 !lg:my-24    lg:mt-0'>
      <h1 className='font-bold text-2xl lg:text-4xl w-full text-center text-black uppercase'>Workplace <span className='text-red-600'>partners</span> </h1>
    <section className='w-full main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  '>
        
            {
                
                heroArr.map((item)=>(
                    <div className='w-full h-full center' key={item.id}>
                    <PartnersCard item={item}/>
                    </div>
                ))
              
            }   
  
    </section>
    </section>
  )
}
