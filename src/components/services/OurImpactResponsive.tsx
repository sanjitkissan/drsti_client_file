import { impact2 } from '@/src/assets/services'
import React from 'react'

export default function OurImpactResponsive() {
  return (
    <section className="w-full main-container lg:hidden flex flex-col items-center justify-center  lg:my-24">
    <p className="tracking-wider  text-red-600 ">Contextually Relevant Environments</p>
    <h2 className="text-2xl lg:text-4xl font-extrabold text-center uppercase mt-4">Our work impact on<span className=" text-red-600"> corporate professionals </span></h2>
    <p className="w-full text-center  lg:text-lg text-black mt-4">Transform entire corporate cultures by creating engaging brand experiences and fostering meaningful connections between businesses and their elite audiences.</p>
    {/* <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
        {
            portfolioArr.map((item:any)=>(
                <div key={item.id}>
                    <PortfolioCard item={item}/>
                </div>
            ))
        }
    </div> */}

    <div className="w-full h-auto">
        <img src={impact2.src} alt="" />
    </div>
</section>
  )
}
