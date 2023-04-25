import { web2 } from "@/src/assets/newladingpage";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
};

export default function AboutUsCard ({item}:any){
    return (
        <>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full ">
        <Slider {...settings}>
            {
              item.img.map((val:any)=>(
<div className=" w-full h-96  " key={val.id}>
              <img src={val.img1.src} alt="img" className="w-full h-full object-cover" />
             
            </div>
              ))
            }
            
          </Slider> 
          </div>
          <div className="w-full flex flex-col items-start justify-start  gap-4">
            <h1 className="text-4xl text-red-600 underline md:underline-offset-4 "> {item.subTitle} </h1>
            <p className="text-black text-lg ">
            {item.descriptionOne}
            </p>
            <p className="text-black text-lg ">{item.descriptionTwo}
            </p>
            {/* <p className='text-2xl text-[#204991] font-[Roboto]'>Learn More.</p> */}
          </div>
        </div>
        </>
    )
}