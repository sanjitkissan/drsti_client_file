import { Main_Logo } from "@/src/assets/navbar";
import Link from "next/link";
import {useState} from 'react'
import LandingForm from "./LandingForm";

export default function Header(){
    const [isOpen, setIsOpen]=useState<boolean>(false)



 


    return(
        <section className="bg-white">
        <section className="w-full main-container h-20 flex items-center justify-between">
            <div className="w-auto h-20">
                <Link href={"/"}>
                <img src={Main_Logo.src} alt="" className="w-full h-full"/>
                </Link>
            </div>
            <div className="w-full flex items-center justify-end">
                <button className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-black to-red-600 border-b font-bold capitalize" type="button" onClick={()=>{
                    setIsOpen(true)
                    
                    }} >Download the Media Deck</button>
            </div>
        </section>
        <LandingForm isOpen={isOpen} setIsOpen={setIsOpen}/>
        </section>
    )
}