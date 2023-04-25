import { homeCardArr } from '@/src/utils/landingpage'
import React from 'react'
import HomeCard from '../card/landingPage/HomeCard'
import HomeCardTwo from '../card/landingPage/HomeCardTwo'

export default function CardSection() {
  return (
    <section className={`w-full main-container overflow-hidden flex flex-col items-center justify-between leading-3 my-12 mt-0  lg:my-24 gap-6 lg:gap-44`} >       
    <div className='w-full center'>
        <h1 className='w-full lg:w-3/5 text-2xl lg:text-4xl text-black font-bold text-center uppercase'>Bringing office buildings to life <span className='text-red-600'>with dynamic content.</span></h1>
    </div>
     <div className='hidden w-full lg:grid grid-cols-3 gap-6'>
     {
       
       homeCardArr.map((item)=>(
        <div key={item.id}>
            <HomeCard item={item} />

        </div>
     
     ))}
</div>
     <div className='lg:hidden w-full grid grid-cols-1 gap-6'>
     {
       
       homeCardArr.map((item)=>(
        <div key={item.id}>
            <HomeCardTwo item={item} />

        </div>
     
     ))}
</div>
  
</section>
  
  )
}  