
import React,{useEffect, useState} from 'react';
import { blogsArrCard } from '@/src/utils/drstiblogs';
import Newcardblogs from '../card/blog/Newcardblogs';

function Newblogs() {



  
    const [uplord, setUplord]=useState<any>([])
    
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/blogs/');
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
        <section className="w-full main-container flex flex-col items-center justify-center gap-6 !lg:my-24 !my-12">
        <div>
          <h1 className="text-2xl lg:text-4xl text-black font-bold text-center  mb-6 uppercase">
          Our Latest <span className='text-red-600'>Blogs</span> 
          </h1>
          <p className=' w-full text-center lg:text-lg '>Welcome to the blog section of dRSTi, {`India’s`} largest workplace marketing network!
Here, you will find a wealth of information about the latest trends and best practices in the world of advertising and marketing. Our team of expert writers and industry professionals will provide you with insights, tips, and strategies to help you stay ahead of the curve and make the most of your advertising efforts.
Our blog is updated regularly with fresh, relevant content, so be sure to check back often for the latest insights and inspiration. And if you have any questions or suggestions for topics {`you'd`} like to see us cover, {`we're`} always happy to hear from our readers.<br/> Thank you for visiting the dRSTi blog, and happy reading!</p>
        </div>
        <div className='w-full'>
     {
       
       uplord?.map((item:any)=>(
        <div key={item.id}>
            <Newcardblogs item={item} />

        </div>
     
     ))}
</div>

{/* <div className="w-full flex flex-col items-start justify-start  gap-4 shadow-inner">
            <h1 className="text-2xl text-black font-[Roboto] hover:text-red-600 mt-5"> Top 8 Principles Of Successful Digital Marketing </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-6 ">
            <span className="flex items-center justify-start gap-2"> 
            <SupervisorAccountIcon className='text-black'/> <h1 className='text-sm text-black'>Ritu Singh</h1>
            </span>

            <span className="flex items-center justify-start gap-2">
            <h1 className='text-sm text-black'>February 1, 2020</h1>
            </span>
           <span className="flex items-center justify-start gap-2">
           <SmsIcon className='text-black'/><h1 className='text-sm text-black'>1 Comment</h1>
            </span>
           
          </div>
            <p className="text-black text-lg font-[Roboto] mt-6">
            You can purchase and buy ad space as well as potential customer interactions stores as Likes, Followers, and clicks to your page with the use of third parties. Mass communication has led to modern
            </p>
            <span className='p-4 rounded-full border-4 border-red-600 hover:bg-red-600 mt-6'>
            <ArrowForwardIosIcon className='text-black'/>
            </span>
          </div> */}
      </section>




    );
}

export default Newblogs;