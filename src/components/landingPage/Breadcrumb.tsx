import React, { useState } from "react";
import { breadCeumbArr, newBreadcrumbArr } from "@/src/utils/landingpage";
import Slider from "react-slick";
import LandingForm from "../newladingpage/LandingForm";
import { slider1, slider3 } from "@/src/assets/landinPage/nreadcrumb";
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
  // const [isOpen,setIsOpen] =useState<boolean>(false)
  return (
    <section className="hidden lg:block w-full h-[calc(100%-5rem)] overflow-hidden">
    <Slider {...settings}>
      {newBreadcrumbArr.map((item:any) => (
        <>
        <section
          className="w-full h-full bg-no-repeat bg-cover bg-center "
          // style={{ backgroundImage: `url(${item?.img.src})` }}
          key={item.id}
        >
          <img src={item.img.src} alt="" className="w-full h-full object-contain"/>
          {/* <div className="w-full main-container flex flex-col items-start justify-center py-24 mt-4 gap-6">
            <h1 className="text-white text-4xl font-bold w-full logoWarper_two ">
             {item?.title}
            </h1>
            <p className="text-white font-bold text-xl w-1/2 logoWarper_two">
              {item?.content}
            </p>
            <span className=" flex items-center justify-start gap-4 w-full">
             
              <button className="text-white rounded-full border-2 border-red-600 hover:bg-gradient-to-r from-red-600 to-blue-600 px-6 py-2 transition-all duration-300 ease-out" onClick={()=>{setIsOpen(true)}} >
                Property Partner
              </button>
            
              <button className="text-white rounded-full border-2 border-red-600 hover:bg-gradient-to-r from-red-600 to-blue-600 px-6 py-2 transition-all duration-300 ease-out">
                Brand Partner
              </button>
            </span>
          </div> */}
          {/* <div className="hidden lg:block absolute  top-32 right-16  bg-white h-3/4 w-96 p-3">
          <img src={item?.boxImg?.src} alt="img" className="w-full h-full" />
          </div> */}
        </section>
        </>
      ))}
    </Slider> 
    {/* <LandingForm isOpen={isOpen} setIsOpen={setIsOpen}/> */}
  </section>
  );
}

export default Breadcrumb;
