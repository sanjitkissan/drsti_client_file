
import { createEventArr, whyDrsticardArrOne } from '@/src/utils/about';
import React from 'react';
import CreateEventscard from '../card/about/CreateEventscard';
import WhyDristOneCard from '../card/about/whyDristOneCard';

function CreateEvents() {
    
    return (
        <section className={`w-full  overflow-hidden flex flex-col items-center justify-between leading-3 lg:my-24 my-12 gap-6`} >       
        <div className='w-full main-container'>
            <h1 className='w-full text-2xl lg:text-4xl text-red-600 font-bold text-center uppercase'><span className='text-black uppercase'>advertise & engage with</span> corporate professionals</h1>
            <p className='text-center lg:text-lg  text-black my-2  leading-6 lg:leading-0'>dRSTi offers exclusive media and brand experience zones to advertise and actively engage with corporate professionals working at leading MNCs in world-class commercial corporate campuses. With a network of over 150 campuses in 8 Metro cities, we have an unparalleled and direct reach to 45,00,000+ coveted corporate audience.</p>
            
        </div>
       
  
  <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 main-container'>
    
  {
                    createEventArr.map((item)=>(
                        <div key={item.id}>
                            <CreateEventscard item={item}/>
                        </div>
                    ))
                }

  </div>
  <div className='w-full h-auto lg:h-44 bg-gradient-to-r from-black to-red-600 '>
                <div className='w-full h-full main-container flex flex-col lg:flex-row items-center justify-between gap-8'>
                            {
                                whyDrsticardArrOne.map((item)=>(
                                    <div key={item.id}>
                                        <WhyDristOneCard item={item}/>
                                    </div>
                                ))
                            }
                </div>
            </div>
            
    </section>
    );
}

export default CreateEvents;