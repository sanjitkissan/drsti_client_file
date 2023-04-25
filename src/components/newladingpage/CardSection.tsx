import React from 'react';
import { web1 } from '@/src/assets/newladingpage';
import { newCardArr, ourTeamArr } from '@/src/utils/newlandingpage';
import OurServices from '../card/AddLandingpage/OurServices';
import OurTeamCard from '../card/AddLandingpage/OurTeamCard';
function CardSection() {
    return (
        <section className={`w-full main-container overflow-hidden flex flex-col items-center justify-between leading-3 my-24`} >       
    <div className='w-full center'>
        <h1 className='text-4xl text-red-600 font-bold text-center uppercase'><span className='text-black'>Marketing</span> opportunities</h1>
    </div>
     <div className='w-full flex  items-center justify-center gap-6'>
     <p className='text-center text-lg  text-black my-2'>Benefit from High Dwell Time in Contextually Relevant Environments</p>
</div> 
{/* <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-6'>
     {
       
       newCardArr.map((item)=>(
        <div key={item.id}>
            <OurServices item={item} />

        </div>
     
     ))}
</div> */}
<div className="  grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        ourTeamArr.map((item:any)=>(
                            <div key={item.id}>
                            <OurTeamCard item={item}/>
                            </div>
                        ))
                    }
                </div>
</section>
    );
}

export default CardSection;