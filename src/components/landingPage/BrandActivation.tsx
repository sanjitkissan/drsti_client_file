import { On_ground_activationHome1, On_ground_activationHome2, On_ground_activationHome3, ourWorkImgOne, ourWorkImgThree, ourWorkImgTwo } from '@/src/assets/landinPage'
import React from 'react'

export default function Brandactivation() {
  return (
    <section className='w-full main-container flex lg:flex-row flex-col items-center justify-between h-[32rem] gap-4 lg:gap-12 mt-32 lg:mt-0'>
         <div className='w-full relative h-full'>
          <div className='lg:w-64 lg:h-64 w-40 h-40 absolute bottom-0 left-0 rounded-lg !overflow-hidden bg-white !p-2 z-50'>
              <img src={On_ground_activationHome1.src} alt="" className='w-full h-full rounded-lg' />
          </div>
          <div className='lg:w-64 lg:h-64 w-40 h-40 absolute lg:bottom-16 lg:left-48 bottom-10 left-24 rounded-lg overflow-hidden z-30 bg-white !p-2 '>
          <img src={On_ground_activationHome2.src} alt="" className='w-full h-full rounded-lg' />
          </div>
          <div className='lg:w-64 lg:h-64 w-40 h-40 absolute lg:bottom-32 lg:left-96 bottom-16 left-44 rounded-lg overflow-hidden '>
          <img src={On_ground_activationHome3.src} alt="" className='w-full h-full' />
          </div>
    </div>
    <div className='w-full flex flex-col items-center justify-center lg:pl-28 lg:ml-44 lg:p-10 gap-6'>
      <span className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='text-2xl lg:text-4xl  font-bold uppercase'>brand</h1>
          <h1 className='text-2xl lg:text-4xl  font-bold uppercase ml-20 text-red-600'>activation</h1>
      </span>
      <div className='w-full lg:w-4/5 flex flex-col items-start  justify-center gap-4'>
          <h1 className='lg:text-2xl text-black '>Experiential Marketing</h1>
          <div className='w-full flex item-end justify-start gap-4'>
              <span className='w-6 h-auto bg-red-600'></span>
              <p className='text-black lg:text-lg'>Build awareness and engagement with a brand through experiential campaigns and events that directly engage and interact with potential consumers. The goal of brand activation is to create a lasting impression by encouraging them to participate in an immersive and memorable experience that is aligned with the brand values and messaging.</p>
          </div>
      </div>
    </div>
   
  </section>
  )
}
