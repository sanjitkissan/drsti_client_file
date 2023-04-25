import { galleryPageArr } from '@/src/utils/gallery'
import { Dialog } from '@mui/material'
import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Photos() {
    const [activeIndex, setActiveIndex] =useState<number>(1)
    const [isImage, setIsImage] =useState<number>(0)
    const [isOpen, setIsOpen] =useState<boolean>(false)


    const forword =()=>{
        if(isImage===galleryPageArr[activeIndex].list.length-1){
            setIsImage(0)
        }else{
            setIsImage(isImage + 1)
        }
    }
    const reverse =()=>{
        if(isImage<= 0){
            setIsImage(galleryPageArr[activeIndex].list.length-1)
        }else{
            setIsImage(isImage-1)
        }
    }

  return (
    <section className='w-full main-container flex flex-col items-center justify-center lg:gap-6 gap-28 my-24'>
      <div className='w-full h-20 flex flex-col lg:flex-row items-center justify-center gap-8  px-8 py-2 rounded-md'>
        {galleryPageArr.map((item, index)=>(

        <span className={`${activeIndex == index && "!border-red-600 !text-red-600"} h-full py-4 px-12 border-2 !cursor-pointer border-transparent rounded-md center hover:border-black shadow-lg shadow-red-100/50 hover:scale-95 !transition-all duration-500 ease-in-out`} key={item.id} onClick={()=>{setActiveIndex(index)}} >
            <h1 className='text-lg text-center w-full capitalize'> {item.categories} </h1>
        </span>
        ))}
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                galleryPageArr[activeIndex].list.map((curElem,index)=>(
                    <img src={curElem.img.src} alt="" className='w-full h-auto lg:h-96 object-cover' key={curElem.id} onClick={()=>{
                        setIsImage(index)
                        setIsOpen(true)
                    }} />
                ))
            }
      </div>
     
      <Dialog
    fullWidth
    maxWidth={"xl"}
    open={isOpen}
    onClose={()=>{setIsOpen(false)}}
    className='hidden md:block w-full'
  >
    <div className=' w-full h-[80vh] py-8 px-20 relative'>
       <CloseIcon className='!text-red-600 absolute top-5 right-8' onClick={()=>{setIsOpen(false)}} />
       <span className='p-4 rounded-full cursor-pointer absolute top-1/2 right-2 -translate-y-1/2' onClick={forword} >
            <ArrowForwardIosIcon className='!text-red-600 !font-bold'/>
       </span>
       <span className='p-4 rounded-full cursor-pointer absolute top-1/2 left-2 -translate-y-1/2' onClick={reverse} >
            <ArrowForwardIosIcon className='!text-red-600 !font-bold rotate-180'/>
       </span>
        <img src={galleryPageArr[activeIndex].list[isImage].img.src} alt="" className='w-full h-full object-cover'/>
    </div>
  </Dialog>
  
    </section>
  )
}
