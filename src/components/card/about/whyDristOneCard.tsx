import React from 'react'

export default function WhyDristOneCard({item}:any) {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center gap-4 py-8 lg:py-0 '>
      <h1 className='text-3xl font-bold text-white text-center'>{item.title}</h1>
      <p className='text-xl font-bold text-white capitalize'>{item.subTitle}</p>
    </section>
  )
}
