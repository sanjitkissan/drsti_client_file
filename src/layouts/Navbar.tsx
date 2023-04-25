

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navArrType } from '../types';
import { Main_Logo } from '../assets/navbar';
import { navArr } from '../utils/Navbar';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  
  const router = useRouter()
  return (
    <section className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] sticky top-0 z-[999] bg-white hidden lg:flex'>
    <section className='main-container w-full flex items-center justify-between h-20 '>
        <picture className='w-full flex items-center justify-start'>
        <Link href={"/"}>
      <img src={Main_Logo.src} alt="" className='w-auto h-20 cursor-pointer' />
      </Link>
        </picture>
        <div className='w-3/5 h-full flex items-center justify-between'>
            {navArr.map((item:navArrType, index:number)=>(
            <span className={` h-full center p-2 cursor-pointer group`} key={item.id} onClick={()=>{
           
              router.push(`${item.path}`)
            }}>
                <h1 className='text-center text-xl font-400 capitalize group-hover:text-red-600 transition-all duration-300 ease-in-out'>{item.title}</h1>
            </span>
            ))}
        </div>
        

    </section>
    </section>
  )
}
