import { homeGalleryArrType } from '@/src/types'
import { homeGalleryArr } from '@/src/utils/landingpage'
import React,{useState, useEffect} from 'react'
import CropFreeIcon from '@mui/icons-material/CropFree';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export default function Galllery() {
    const [activeIndex,setActiveIndex]=useState<number>(0)

    

     
     useEffect(()=>{
        const interval=setInterval(()=>{
            if (activeIndex===homeGalleryArr.length-1){
                setActiveIndex(0)
                
            }
            else {
                setActiveIndex(activeIndex+1)
            }
            return 
         } ,3000)
         return ()=>{
            clearInterval(interval)
         }
     }, [activeIndex])
   


     const forward=()=>{
      if (activeIndex===homeGalleryArr.length-1){
        setActiveIndex(0)
        
    }
    else {
        setActiveIndex(activeIndex+1)
    }
     }

     
     const reverse=()=>{
        if(activeIndex <= 0){
          setActiveIndex(homeGalleryArr.length-1)
        }else{
          setActiveIndex(activeIndex-1)
        }
     }



  return (
    <section className='w-full main-container flex flex-col items-center justify-center my-28 p-2 gap-8'>
        <h1 className='text-4xl font-bold uppercase'>gallery</h1>
      <div className='w-full h-[40rem] overflow-hidden rounded-md' >
        <div style={{backgroundImage:`url(${homeGalleryArr[activeIndex].img.src})`}} className='w-full h-[35rem] bg-no-repeat bg-center bg-cover flex items-center justify-between p-4 !transition-all !duration-1000 !ease-in-out'>
          <span className='p-4 bg-gray-200 rounded-2xl bg-opacity-40'>
          <ArrowBackIosNewIcon onClick={reverse} className="!text-white !text-5xl"/>
          </span>
          <span className='p-4 bg-gray-200 rounded-2xl bg-opacity-40'>
        <ArrowForwardIosIcon onClick={forward} className="!text-white !text-5xl"/>
          </span>
        </div>
        <div className='w-full h-20 flex items-center justify-between border-t-4 border-red-600 '>
        {
                homeGalleryArr.map((item:homeGalleryArrType,index:number)=>(
                    <div key={item.id} onClick={()=>{setActiveIndex(index)}} className="h-20 w-full border border-black relative">
                      {
                        activeIndex===index && (<>   
                      <span className='absolute top-0 bottom-0 right-0 left-0 bg-blue-900 bg-opacity-60'>
                      <CropFreeIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 !text-red-400 -translate-x-1/2'/>
                      </span>
                        </>)
                      }
                    <img src={item?.img?.src} alt="" className=' w-full h-full object-cover'/>
                    </div>
               ))
            }
        </div>
      </div>
       
    </section>
  )
}
