import { newSectionArr } from '@/src/utils/newlandingpage'
import React from 'react'
import Slider from 'react-slick'
import NewSectionCard from '../card/AddLandingpage/NewSectionCard'
const settings = {
    dots: false,
    infinite: true,
    
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    className: "center",
        centerMode: true,
        // centerPadding: "60px",
        rows: 2,
        slidesPerRow: 1,
       
  };
export default function ResponsiveNewSection() {
  return (
    <section className='w-full main-container block my-24 lg:hidden'>
    <h1 className='text-4xl font-bold uppercase w-full text-center mb-6'>High Profile <span className='text-red-600'> Member Companies</span></h1>
    <Slider {...settings}>
      {
        newSectionArr.map((item:any)=>(
          <div key={item.id}>

            <NewSectionCard item={item}/>
          </div>
        ))
      }
    </Slider>
  </section>
  )
}
