import { whyDrsticardArrType } from '@/src/types'
import React from 'react'
type prop={
    item:whyDrsticardArrType
}
export default function WhyDrsti({item}:prop) {
  return (
    <section className=' flex flex-col items-start justify-start gap-2'>
      <h1 className='lg:text-2xl font-bold text-red-600'>{item.title}</h1>
      <p className=''>{item.description}</p>
    </section>
  )
}
