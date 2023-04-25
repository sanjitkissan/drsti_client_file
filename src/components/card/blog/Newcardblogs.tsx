import { blogArrCard } from '@/src/types';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmsIcon from '@mui/icons-material/Sms';
import React from 'react';
import Link from 'next/link';
type prop={
    item: blogArrCard  
}
function Newcardblogs({item}:any) {
    return (
        <section  className='w-full flex flex-col items-center justify-center  gap-6 lg:my-12 my-6'>
             <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-6 shadow-inner ">
         
            <div className="w-full lg:w-2/5 h-auto">
              <img src={item?.attributes?.ImageURL} alt="img" className="w-full h-full object-cover" /> 
            </div>
         
          <div className="w-full flex flex-col items-start justify-start  lg:gap-0 py-4">
            <h1 className="lg:text-2xl text-black  hover:text-red-600"> {item.attributes.title} </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 mt-2 ">
            <span className="flex items-center justify-start gap-2"> 
            <SupervisorAccountIcon className='text-black'/> <h1 className='text-sm text-black'>{item.attributes.name}</h1>
            </span>

            <span className="flex items-center justify-start gap-2">
            <CalendarMonthIcon className='text-black'/><h1 className='text-sm text-black'>{item.attributes.date}</h1>
            </span>
           {/* <span className="flex items-center justify-start gap-2">
           <SmsIcon className='text-black'/><h1 className='text-sm text-black'>1 Comment</h1>
            </span>
            */}
          </div>
            <p className="text-black lg:text-lg my-2">
            {item.attributes.subTitle}
            </p>
            <Link href={`/blog/${item.id}`}>
            <aside className='p-2 rounded-full border-4 border-red-600 hover:bg-red-600 '>
            <ArrowForwardIosIcon className='text-black'/>
            </aside>
            </Link>
          </div>
        </div>
         
        </section>
    );
}

export default Newcardblogs;