import { roadMap2 } from '@/src/assets/landinPage'
import React from 'react'

export default function RoadMapResponsive() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-8 lg:hidden lg:my-24 my-12'>
    <div className='w-full flex flex-col items-center justify-center gap-6'>
      <h1 className='w-full text-center text-black text-2xl lg:text-4xl font-bold uppercase'>our <span className='text-red-600'> journey</span></h1>
      <p className='lg:text-lg  text-center'> The journey of dRSTi began in the year 2009 when a group of advertising professionals came together with a vision to create an innovative advertising agency that would revolutionize the industry. They began with a small team and a few clients, but their passion and dedication soon paid off, as they began to attract more clients and expand their reach.
Today, dRSTi had become the largest workplace marketing network in India, with a presence in over 150+ corporate campuses across the country. We continued to innovate and stay ahead of the curve, using data-driven insights and cutting-edge technology to help their clients achieve their advertising goals.
</p>
    </div>
    <div  className="w-full group ">
      <img src={roadMap2.src} alt="" className='w-full h-full group-hover:scale-105' />
    </div>
  </section>
  )
}
