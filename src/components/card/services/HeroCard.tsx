import { HeroImg1 } from "@/src/assets/services";



export default function HeroCard({item}:any){
    return(
        <section className="w-full h-[28rem] group relative overflow-hidden !transition-all !duration-500 !ease-in-out p-4">
            <img src={item.img.src} alt="" className="w-full h-full group-hover:scale-110 !transition-all !duration-500 !ease-in-out"  />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-white flex flex-col items-start justify-center gap-4 group-hover:bg-black group-hover:bg-opacity-60 !transition-all !duration-500 !ease-in-out p-4">
                <p className="text-2xl font-bold group-hover:text-gray-300 !transition-all text-red-600 !duration-500 !ease-in-out ">{item.title}</p>
                <p className="text-lg group-hover:text-gray-300 !transition-all !duration-500 !ease-in-out ">{item.description}</p>

                <h1 className="text-5xl font-bold group-hover:text-black group-hover:scale-150 !transition-all !duration-500 !ease-in-out ">{item.heading}</h1>
            </div>
        </section>
    )
}