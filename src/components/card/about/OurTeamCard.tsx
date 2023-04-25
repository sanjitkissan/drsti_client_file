import { OurTeamArrType } from '@/src/types';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from 'next/link';



function OurTeamCard({item}:any) {
  console.log(item)
  console.log(typeof(item))
    return (
        
        <div className="w-full flex  flex-col items-center justify-center gap-4 ">
       <div className="w-40 h-40 rounded-full overflow:hidden">
         <img src={item?.attributes?.ImageURL} alt="imgsanjit kissan" className="w-full h-full  object-cover rounded-full" /> 
       </div>
       <div className="w-full h-full flex flex-col items-center justify-center  gap-2">
       <h1 className="text-2xl text-black hover:text-red-600">{item?.attributes
?.name }</h1>
       {/* <p className="text-black text-lg  ">{item?.content}</p> */}
       <span className='w-full flex items-center justify-center gap-2'>
        <h1 className='text-sm text-black'>{item?.attributes?.position}</h1>
        <span className='w-[1px] bg-red-600 h-6'></span>

       {/* <InstagramIcon className='!text-pink-400 cursor-pointer !text-3xl'/> */}
       <Link href={`${item?.attributes?.url}`} target='_blank'>
            <LinkedInIcon className='!text-blue-600 cursor-pointer !text-3xl'/>
       </Link>
            {/* <YouTubeIcon className='!text-red-600 cursor-pointer !text-3xl'/> */}
       </span>
     </div>
   </div>
    
  
    );
}

export default OurTeamCard;