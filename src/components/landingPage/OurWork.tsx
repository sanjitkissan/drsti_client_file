import { Digital_Media_ImageHome1, Digital_Media_ImageHome2, Digital_Media_ImageHome3 } from '@/src/assets/landinPage'
import React from 'react'

export default function OurWork() {
  return (
    <section className='w-full main-container flex lg:flex-row flex-col-reverse items-center justify-between h-[32rem] gap-4 my-24 lg:my-24 '>

      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <span className='w-full flex flex-col items-start justify-center gap-4'>
            <h1 className='text-2xl lg:text-4xl  font-bold uppercase '>Branding</h1>
            <h1 className='text-2xl lg:text-4xl  font-bold uppercase ml-20 text-red-600 '>Visibility</h1>
        </span>
        <div className='w-full lg:w-1/2 flex flex-col item items-start justify-center gap-4'>
            <h1 className='lg:text-2xl text-black capitalize '>Static & Digital Media</h1>
            <div className='w-full flex item-center justify-start gap-4'>
                <span className='w-6 h-auto bg-red-600'></span>
                <p className='text-black  lg:text-lg'>Advertising services offer companies in office spaces a unique opportunity to enhance their branding in front of key decision-makers. Displayed in high-traffic areas such as lobbies, elevators, and common areas, companies can increase their visibility in front of the elite audience in the workplace environment.</p>
            </div>
        </div>
      </div>

      <div className='w-full relative h-full'>
            <div className='lg:w-64 lg:h-64 w-40 h-40 absolute bottom-0 left-0 rounded-lg !overflow-hidden bg-white !p-2 z-50'>
                <img src={Digital_Media_ImageHome1.src} alt="" className='w-full h-full rounded-lg' />
            </div>
            <div className='lg:w-64 lg:h-64 w-40 h-40 absolute lg:bottom-16 lg:left-48 bottom-10 left-24 rounded-lg overflow-hidden z-30 bg-white !p-2 '>
            <img src={Digital_Media_ImageHome2.src} alt="" className='w-full h-full rounded-lg' />
            </div>
            <div className='lg:w-64 lg:h-64 w-40 h-40 absolute lg:bottom-32 lg:left-96 bottom-16 left-44 rounded-lg overflow-hidden '>
            <img src={Digital_Media_ImageHome3.src} alt="" className='w-full h-full' />
            </div>
      </div>

    </section>
  )
}
