import React,{useState,useEffect, Fragment} from "react";

import { cardArrHome } from "@/src/types";
import Slider from "react-slick";
type prop = {
  item: cardArrHome;
};
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
};
function HomeCard({ item }: prop) {
    
    




  return (
      
    <section
      className={`w-full h-96 p-2 overflow-hidden bg-white border border-black ${
        item.id == 2 && "mt-48"
      } $ ${item.id == 4 && "mt-48"} ${item.id == 1 && "-mt-20"} ${
        item.id == 5 && "-mt-20"
      }`}
    >
     <Slider {...settings}>
       {
        item.img.map((items,index)=>(
             <div className="w-full h-96"  key={items.id}>
            

              <img
                src={items.img1.src}
                alt="img"
                className={`w-full h-full object-cover `}
               
              />
           
              
             </div>
        ))
       }
      </Slider>
            
    </section>
     
  );
}

export default HomeCard;
