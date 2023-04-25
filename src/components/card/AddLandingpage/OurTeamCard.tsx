import LandingForm from "../../newladingpage/LandingForm";
import {useState} from 'react'

export default function OurTeamCard({item}:any){
    // const [isOpen,setIsOpen]=useState<boolean>(false)
    return(
        <section className="w-full  flex flex-col items-start justify-center gap-4 my-10 overflow-hidden" >
            <div className="w-full h-96 rounded-lg overflow-hidden">
                <img src={item.img.src} alt="" className="w-full h-full !object-cover" />
                {/* <span className="absolute top-0 bottom-0 right-0 left-0 bg-white bg-opacity-0 rounded-lg hover:bg-opacity-80 hover:border-8 border-red-600 transition-all duration-500 ease-in-out group">
                    <span className="w-full flex flex-col items-start justify-start gap-4 group-hover:translate-y-20 opacity-0 group-hover:opacity-100 px-4 transition-all duration-500 ease-in-out">
                        <h1 className="text-2xl font-bold tracking-wider">{item.title}</h1>
                        <h1 className="text-xl text-red-600 font-bold tracking-wider">{item.description}</h1>
                    </span>
                </span> */}
            </div>
            <div>
                <h1 className="text-2xl font-bold capitalize  text-red-600">{item.name}</h1>
                <h1 className="text-lg">{item.position}</h1>
            </div>
            {/* <LandingForm isOpen={isOpen} setIsOpen={setIsOpen}/> */}
        </section>
    )
}