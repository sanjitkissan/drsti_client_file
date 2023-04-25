import { OurTeamArr } from '@/src/utils/about';
import React, { useEffect, useState } from 'react';
import OurTeamCard from '../card/about/OurTeamCard';
import axios from "axios"
 
// export const getStaticProps= async ()=>{
//     const res = await fetch("http://localhost:1337/api/abouts/")
//     const data= await res.json()
//     const postData = data.data

//     return {
//         props:{
//             postData: postData
//         }
//     }
// }


function  OurTeam() {
    const [uplord, setUplord]=useState<any>([])
    
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/abouts/');
                const jsonData = await response.json();
                // console.log(jsonData.data)
                // const preData=jsonData.data
                // const newData=[]
                // const postData=newData.push(preData)
                setUplord(jsonData.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [])
    console.log("uplord", uplord)
    
    return (
        <section className={`w-full main-container overflow-hidden flex flex-col items-center justify-between leading-3 gap-6 lg:my-24 my-12`} >       
        <div className='w-full '>
            <h1 className='w-full text-2xl lg:text-4xl text-red-600 font-bold text-center uppercase'><span className='text-black'>Our Team</span> Members</h1>
            <p className='text-center lg:text-lg  text-black my-2 leading-6 lg:leading-0'>We are a team of passionate advertising professionals committed to delivering innovative and effective advertising solutions to our clients. With our expertise and creativity, we strive to help our clients achieve their advertising goals and take their businesses to the next level.</p>
        </div>
        
  
  <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    
  {
                    uplord.map((item:any)=>(
                        <div key={item.id}>
                            < OurTeamCard item={item}/>
                        </div>
                    ))
                }


  </div>
            
    </section>
    );
}

export default OurTeam;