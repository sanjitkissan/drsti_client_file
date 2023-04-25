import { solutionsArrType } from '@/src/types';
import Link from 'next/link';
import React from 'react';
type prop = {
    item: solutionsArrType;
  };
function OursolutionsCard({ item }: prop) {
    return (
        <section className=' w-full flex flex-col items-start justify-start rotate-y lg:my-24 my-12 gap-4 rounded-md  hover:scale-95 transition-all ease-in-out  '>
            

  <div className="group h-[26rem]  w-full lg:w-96 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <div className='w-full h-full bg-gradient-to-tr from-black to-red-600 rounded-xl'>
          <img src={item.img.src} alt="" className='w-full h-full rounded-xl'/>
          <span className='w-full h-20 bg-gradient-to-r from-black to-red-600 absolute bottom-0 center rounded-b-xl'>
            <h1 className='lg:text-xl text-white font-bold capitalize'>{item.subTitle}</h1>
          </span>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-tr from-black to-red-600 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex w-full h-full flex-col items-start justify-start p-4 gap-6">
        <h1 className="font-bold lg:text-2xl text-white  ">{item?.title}</h1>
            <p className="w-full  lg:text-lg  text-white "> {item?.content}</p>
            <Link href={"/http://www.pedaldock.com/"}>
            <p className="w-full  lg:text-lg  text-white ">{item?.linkOne}</p>
            </Link>
            <Link href={"/https://www.linkedin.com/company/biztalknet"}>
            <p className="w-full  lg:text-lg  text-white ">{item?.linkTwo}</p>
            </Link>
        </div>
      </div>
    </div>
  </div>
  

        </section>
    );
}

export default OursolutionsCard;