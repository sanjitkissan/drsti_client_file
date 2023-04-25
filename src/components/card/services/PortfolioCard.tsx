import { PortfolioImg1 } from "@/src/assets/services";



export default function PortfolioCard({item}:any){
    return(
        <section className="w-full h-96 relative group transition-all duration-500 ease-out">
            <img src={item.img.src} alt="" className="w-full h-full" />
            <span className="absolute top-0 bottom-0 left-0 right-0 center bg-black bg-opacity-0 group-hover:bg-opacity-50  transition-all duration-500 ease-out">
                <h1 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out ">{item.title}</h1>
            </span>
        </section>
    )
}