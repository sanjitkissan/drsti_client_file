import { newOne } from '@/src/assets/newladingpage'
import { newSectionArr } from '@/src/utils/newlandingpage';
import React from 'react'
import Slider from 'react-slick';
import NewSectionCard from '../card/AddLandingpage/NewSectionCard';
const settings = {
  dots: true,
  infinite: true,
  
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  className: "center",
      centerMode: true,
      // centerPadding: "60px",
      rows: 2,
      slidesPerRow: 5,
     
};
export default function NewSection() {
  return (
    <section className='w-full main-container  lg:block my-24 hidden'>
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
