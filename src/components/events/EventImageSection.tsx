import { eventGalleryArr } from '@/src/utils/event'
import React,{useState} from 'react'

export default function EventImageSection() {
    const [isActiveIndex, setIsActiveIndex]=  useState<number>(0)
  return (
  


    <section style={{backgroundImage:`url(${eventGalleryArr[isActiveIndex]?.img?.src})`}} className='w-full main-container rounded-lg flex items-center justify-center gap-10 overflow-hidden bg-center bg-cover bg-no-repeat h-[60vh] my-24 !transition-all !duration-1000 !ease-in-out'>
    {
        eventGalleryArr.map((item,index)=>(
      <span className='py-3 px-6 hover:bg-white group !transition-all !duration-500 !ease-in-out rounded-md' onMouseOver={()=>{setIsActiveIndex(index)}} key={item.id}>
        <h1 className='text-white text-xl font-bold group-hover:text-red-600'>{item.title}</h1>
      </span>
      ))
    }
    </section>
        
   
  )
}


