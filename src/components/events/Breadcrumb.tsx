import { breadCrumbArr } from '@/src/utils/event'
import React from 'react'
import Slider from 'react-slick';
const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
export default function Breadcrumb() {
  return (
    <section className='w-full h-[70vh] overflow-hidden mb-12'>
    <Slider {...settings}>
    {
        breadCrumbArr.map((item)=>(
            <div key={item.id}>
    <section style={{backgroundImage:`url(${item?.img?.src})`}} className='w-full bg-center bg-cover bg-no-repeat h-[70vh]'>
      
    </section>

        </div>
        ))
    }
    </Slider>
    </section>
  )
}
