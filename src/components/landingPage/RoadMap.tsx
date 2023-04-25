import {  journeyImg } from '@/src/assets/landinPage'
import React from 'react'

export default function RoadMap() {
  return (
    <section className='w-full hidden main-container lg:flex flex-col items-center justify-center gap-8 lg:my-24 my-12'>
      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <h1 className='w-full text-center text-black text-2xl lg:text-4xl font-bold uppercase'>our <span className='text-red-600'> journey</span></h1>
        <p className='lg:text-lg  text-center'> dRSTi was founded in the year 2010 with a simple and clear objective to help brands effectively reach-out and engage with their {`"Key Target Group"`} with the least spillover. Over the years, with the trust vested by leading media agencies and advertising brands we have delivered many curated brand campaigns, while our young and enthusiastic team has tirelessly un-learned, evolved, and continuously progressed towards our vision.

</p>
<p className='lg:text-lg  text-center !mt-4 lg:mt-0'>Today, we are the largest media house in the country to own and exclusively promote media assets within large corporate parks, premium business hubs, and other workplaces. These captive habitats with its coveted TG and multi-layered marketing platforms that include OOH, DOOH, On-ground engagements, and digital outreach has become an unmissable destination for advertising brands.</p>
      </div>
      <div  className="w-full h-auto lg:h-[70vh] group transition-all duration-500 ease-in-out overflow-hidden">
        <img src={journeyImg.src} alt="" className='w-full h-full object-contain group-hover:scale-105 transition-all duration-500 ease-in-out' />
      </div>
    </section>
  )
}
