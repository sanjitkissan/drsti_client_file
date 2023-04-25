import { whyDrsticardArr, whyDrsticardArrOne } from '@/src/utils/about';
import React from 'react';
import WhyDrsti from '../card/about/WhyDrsti';
import WhyDristOneCard from '../card/about/whyDristOneCard'
import { contactFormImg } from '@/src/assets/landinPage';

function WhyChoose() {
    return (
        <section className="w-full  flex flex-col items-center justify-start !lg:my-24">      
            <div className='w-full !h-full main-container flex flex-col lg:flex-row items-center justify-start gap-6'>
                <div className='w-full flex flex-col items-start justify-start gap-6'>
                    <h1 className='text-2xl lg:text-4xl font-bold text-red-600'><span className='text-black uppercase'>why choose </span> dRSTi?</h1>
                    <p className='w-full lg:w-3/4 lg:text-lg '> {`dRSTi's`} team of experienced professionals and advanced technologies can help your brand stand out in a co-working space, where key decision-makers and the most promising audiences are present. With creative and effective activation campaigns, we can help you increase your visibility and reach the key decision-makers.</p>
                    <div className='w-full h-full grid grid-cols-1 gap-6 lg:px-16 lg:mt-8'>
                            {
                                whyDrsticardArr.map((item)=>(
                                    <div key={item.id}>
                                        <WhyDrsti item={item}/>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className='w-full h-[48rem] flex flex-col items-center justify-center gap-2' >
                    <div className='p-4 w-full h-full border border-red-600'>
                        <img src={contactFormImg.src} alt="" className='w-full h-full object-cover' />
                    </div>
                    
                    
                </div>
            </div>
            {/* <div className='w-full h-auto lg:h-52 bg-gradient-to-r from-black to-red-600'>
                <div className='w-full h-full main-container flex flex-col lg:flex-row items-center justify-between gap-8'>
                            {
                                whyDrsticardArrOne.map((item)=>(
                                    <div key={item.id}>
                                        <WhyDristOneCard item={item}/>
                                    </div>
                                ))
                            }
                </div>
            </div> */}
    </section>
    );
}

export default WhyChoose;