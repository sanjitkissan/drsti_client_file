import React from 'react'

export default function NewSliderCard({item}:any) {
  return (
    <div className='w-full main-container'>
       <div className='w-full my-4 p-4 h-28 rounded-xl overflow-hidden shadow-[0_1px_5px_#D30000]' >
                        <img src={item.img.src} alt="" className='w-full h-full m-auto object-contain' />
                    </div>
    </div>
  )
}
