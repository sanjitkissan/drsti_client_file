import { ourTeamArr } from "@/src/utils/newlandingpage";
import { Fragment } from "react";
import OurTeamCard from "../card/AddLandingpage/OurTeamCard";



export default function OurTeam(){
    return(
        <>
            <section className="w-full main-container flex flex-col items-center justify-center gap-6 my-24">
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-red-600 w-full text-center uppercase"> <span className="text-black">Our</span> Events</h1>
                    <p className="text-black w-full text-lg text-center">Reach niche audiences through our static, digital, and on-ground activations and elevate your brand at premium co-working space.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    {
                        ourTeamArr.map((item:any)=>(
                            <div key={item.id}>
                            <OurTeamCard item={item}/>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}