import { OurPartnersArr } from '@/src/utils/about';
import React from 'react';
import CardPartner from '../card/about/CardPartner';
import CircleIcon from '@mui/icons-material/Circle';
function OurPartners() {
    return (
        <section className='w-full main-container flex flex-col lg:flex-row items-start justify-center gap-6 lg:my-24 my-12'>
            <div className='w-full flex flex-col items-start justify-center gap-4 p-6'>
             <h1 className='text-2xl lg:text-4xl  font-bold uppercase'>{`Let's`} Create <span className='text-red-600 uppercase'> Magic Together!</span></h1>
            <p className='lg:text-lg text-black '>With us businesses have the unique opportunity to showcase their brand and captivate upscale consumers through our extensive workplace network. Our platform enables partners to engage with a highly targeted and affluent audience. Drive brand awareness, customer loyalty, and revenue growth, while also benefiting from our expertise and industry insights.</p>
           <span className='w-full flex items-start justify-start gap-4 '>
            <CircleIcon className='!text-red-600 mt-2'/>
            <h1 className='lg:text-lg text-black '>Advertise in 100+ corporate campuses across the country to reach corporate professionals at a Premium Corporate workspace.</h1>
            </span>
           <span className='w-full flex items-start justify-start gap-4 '>
           <CircleIcon className='!text-red-600 mt-2'/>
            <h1 className='lg:text-lg text-black '>High-impact, high-frequency media plan within 125+ flexible/hybrid workspaces across the country for extensive reach.</h1></span>
           {/* <span className='text-xl text-black '>Tempor incididunt uet labore dolore magna aliqua</span> */}
           <span className='w-full flex items-start justify-start gap-4'> 
           <CircleIcon className='!text-red-600 mt-2'/>
           <h1 className='lg:text-lg text-black '> Engage with high-value elite audiences at scale in curated, brand-safe, contextually-relevant environments throughout the day.</h1></span>
            </div>
           
            <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-6 p-6'>
            {
                    OurPartnersArr.map((item)=>(
                        <div key={item.id} className="w-full center">
                            < CardPartner item={item}/>
                        </div>
                    ))
                }
            </div>
           
        </section>
    );
}

export default OurPartners;