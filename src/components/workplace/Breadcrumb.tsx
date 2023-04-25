// import { BannerImg, BreadcrumbImg1 } from '@/src/assets/workplace';
import { workplaceBreadcrumbArr } from '@/src/utils/workplace';
import React from 'react';
import Slider from 'react-slick';
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
function Breadcrumb() {
    return (
        // <section>
        //     <section  className="w-full bg-center bg-cover bg-no-repeat h-auto overflow-hidden">
        //     <img src={BannerImg.src} alt="" className='w-full h-full'/>
        //         <div className="w-full h-full main-container flex flex-col lg:flex-row items-center justify-center">
        //             {/* <div className="w-full h-full flex flex-col items-start justify-center gap-6">
                        
        //                 <p className="text-white lg:text-xl uppercase tracking-wider ">Engage Modern Professionals</p>
        //                 <span>
        //                 <h1 className="text-2xl lg:text-4xl text-white tracking-wide font-bold capitalize ">High dwell, High-Frequency </h1>
        //                 <h1 className="font-bold text-2xl lg:text-4xl text-white tracking-wide capitalize ">Captive Environments.</h1>
        //                 </span>
                        
        //             </div> */}
                    
        //         </div>
        // </section>
        // </section>
         <section className="block w-full h-[calc(100%-5rem)] overflow-hidden">
         <Slider {...settings}>
           {workplaceBreadcrumbArr.map((item:any) => (
             <>
             <section
               className="w-full h-full bg-no-repeat bg-cover bg-center "
              
               key={item.id}
             >
               <img src={item.img.src} alt="" className="w-full h-full object-contain"/>
              
             </section>
             </>
           ))}
         </Slider> 
         
       </section>
    );
}

export default Breadcrumb;