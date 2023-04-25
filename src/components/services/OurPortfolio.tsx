import { ourImpactImg } from "@/src/assets/services";
import { portfolioArr } from "@/src/utils/services";
import PortfolioCard from "../card/services/PortfolioCard";



export default function OurPortfolio(){
    return(
        <section className="w-full main-container hidden lg:flex flex-col items-center justify-center gap-6 lg:my-24 my-12">
            <p className="tracking-wider  text-red-600">Contextually Relevant Environments</p>
            <h1 className="text-2xl lg:text-4xl font-bold uppercase ">Our work impact on<span className=" text-red-600"> corporate professionals </span></h1>
            <p className="w-3/5 text-center  lg:text-lg text-black">Transform entire corporate cultures by creating engaging brand experiences and fostering meaningful connections between businesses and their elite audiences.</p>
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
                <img src={ourImpactImg.src} alt="w-full h-full" />
            </div>
        </section>
    )
}