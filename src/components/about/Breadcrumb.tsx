import { BannerImg, breadcrumbImage } from '@/src/assets/aboutpage';
import { whyDrsticardArrOne } from '@/src/utils/about';
import React from 'react';
import WhyDristOneCard from '../card/about/whyDristOneCard';

function Breadcrumb() {
    return (
        <section>
            <section className="w-full bg-center bg-cover bg-no-repeat h-auto overflow-hidden">
            <img src={BannerImg.src} alt="" className='w-full h-full'/>
                <div className="w-full h-full main-container flex flex-col lg:flex-row items-center justify-center">
                    {/* <div className="w-full h-full flex flex-col items-start justify-center gap-6">
                        <p className="text-white lg:text-lg uppercase tracking-wider">Engage Modern Professionals</p>
                        <span>
                        <h1 className="text-2xl lg:text-4xl text-white tracking-wide capitalize font-bold">High dwell, High-Frequency </h1>
                        <h1 className="font-bold text-2xl lg:text-4xl text-white tracking-wide capitalize">Captive Environments.</h1>
                        </span>
                        
                    </div> */}
                    
                </div>
              
        </section>
        
        </section>
    );
}

export default Breadcrumb;