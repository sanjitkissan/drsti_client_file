import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { page404 } from '../assets/404';

function Error() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
router.push("/")
        },2000)
    },[])
    return (
        <section className='w-[100vw] h-[100vh] center'>
            <div className='w-full h-full center relative'>
             <img src={page404.src} alt="" />
             <span className=' absolute bottom-36'>
            <p className='text-4xl w-full text-center text-red-600 font-bold'>Opps! Page not found</p>
            <p className='text-2xl w-full text-center'>
               Sorry, the page {`you're`} looking for {`doesn't`} exist. If you think something is broken, report a problem.
            </p>
             </span>
            </div>
        </section>
    );
}

export default Error;