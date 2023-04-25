import { newCardArr, newSliderArr } from '@/src/utils/newlandingpage';
import React from 'react'
import Slider from 'react-slick';
import NewSliderCard from '../card/AddLandingpage/NewSliderCard';
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
      slidesPerRow: 4,
     
};
export default function NewSlider() {
  return (
    <div className='w-full main-container lg:block my-24 hidden'>
       <h1 className='text-4xl font-bold mb-12 uppercase w-full text-center'>Corporate Companies <span className='text-red-600'> Operating In Our Campuses</span></h1>
      <Slider {...settings}>
            {
                newSliderArr.map((item:any)=>(
                   <div key={item.id}>
                    <NewSliderCard item={item} />
                   </div>
                ))
            }
      </Slider>
    </div>
  )
}
