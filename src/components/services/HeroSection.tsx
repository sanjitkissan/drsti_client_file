import { servicesHeroArr } from "@/src/utils/services";
import HeroCard from "../card/services/HeroCard";


export default function HeroSection(){
    return(
        <section className="w-full main-container flex flex-col lg:flex-row items-center justify-center gap-4">
                {
                    servicesHeroArr.map((item:any)=>(
                        <div key={item.id}>

                            <HeroCard item={item}/>
                        </div>
                    ))
                }
        </section>
    )
}