import { slide1 } from '@/src/assets/landinPage/responsiveBreadcrumb'
import { responsiveBreadcrumbArr } from '@/src/utils/landingpage';
import React from 'react'
import Slider from 'react-slick';
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
};
export default function SesponsiveBreadcrumb() {
  return (
    <section className='block lg:hidden w-full h-full overflow-hidden'>
    <Slider {...settings}>
      {
        responsiveBreadcrumbArr.map((item:any)=>(
          <div key={item.id}>
               <img src={item.img1.src} alt="" className='w-full h-full !object-contain' />
  
  
          </div>
        ))
      }
     
      </Slider>
    </section>
  )
}
