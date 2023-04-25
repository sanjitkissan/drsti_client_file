import { slide1 } from '@/src/assets/landinPage/responsiveBreadcrumb'
import { newBreadcrumbArr } from '@/src/utils/landingpage';
import React from 'react'
import Slider from 'react-slick';
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
};
export default function NewBreadcrumb() {
  return (
    <section className='hidden lg:block w-full h-full overflow-hidden '>
      <Slider {...settings}>

        {
          newBreadcrumbArr.map((item)=>(
            <div className='!overflow-hidden' key={item.id}>
                  <img src={item.img.src} alt="" className='w-full h-full'/>
            </div>
          ))
        }
     
    
  </Slider>
    </section>
  )
}
