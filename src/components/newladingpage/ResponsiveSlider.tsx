import { newSliderArr } from '@/src/utils/newlandingpage';
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
        slidesPerRow: 1,
       
  };
export default function ResponsiveSlider() {
  return (
    <div className='w-full main-container block my-24 lg:hidden'>
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
