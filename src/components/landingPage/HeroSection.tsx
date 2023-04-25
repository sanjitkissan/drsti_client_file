import { aim, bit, manage, secure, wp11 } from "@/src/assets/landinPage";
import { homeWorkplaceArr } from "@/src/utils/landingpage";
import React,{useState} from "react";
import Slider from "react-slick";
 import axios from "axios";
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
};


function HeroSection() {
  const [activeIndex, setActiveIndex] =useState<number>()
  // const [post, setPost]=useState()

  // axios.get("/api/homecollects/").then((response) => {
  //   setPost(response.data)
  // })
  //  console.log(post)
  return (
    <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-10 lg:my-24 my-12">
      <div className="w-full h-auto">
        <h1 className="text-2xl lg:text-4xl text-black font-bold uppercase text-center mb-4 ">
          Workplace <span className="text-red-600">Marketing</span> 
        </h1>
        <p className="lg:text-lg text-black text-center ">
       This is the opportunity for your brand to influence the workplace with {`dRSTi's`} largest workplace marketing network!
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
        <div className="w-full h-full">
        <Slider {...settings}>
       
          {
            homeWorkplaceArr.map((item)=>(
              <div key={item.id} className="w-full h-full center">
              <img src={item.img.src} alt="img" className="w-full h-full !object-cover " />
              
              </div>
            ))
          }
             {/* {
            post.map((item)=>(
              <div key={item.id} className="w-full h-full center">
              <img src={item.img.src} alt="img" className="w-full h-full !object-cover " />
              
              </div>
            ))
          } */}
         
          </Slider>
        </div>
        <div className="w-full flex flex-col items-start justify-center h-auto lg:h-full gap-6 ">
          <span className="flex gap-6">
            {" "}
            <img src={bit.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            Business professionals spend 10+ hours of their active day in premium office spaces, being exposed to brands could leave a lasting impression on their minds.
            </p>
          </span>
          <span className="flex gap-6">
            <img src={secure.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            Office professionals are surrounded by like-minded individuals, with whom they interact, discuss, research and share their experiences.
            </p>
          </span>
          <span className="flex gap-6">
            <img src={aim.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            This captive audience is actively seeking new engagements to break their monotonous routines making them an ideal target for brands to advertise to their product.
            </p>
          </span>
          <span className="flex gap-6">
            <img src={manage.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            We specialize in creating innovative campaigns that are scalable and highly impactful. Our trendsetting strategy is to maximize reach and engagement.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
