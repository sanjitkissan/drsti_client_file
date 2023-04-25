import { amezinfactImgnew, features } from '@/src/assets/newladingpage';
import React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import PublicIcon from '@mui/icons-material/Public';
import SmsIcon from '@mui/icons-material/Sms';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function Amazing() {
    return (
        <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-4 my-24">
        
         <h1 className="text-4xl text-red-600 font-bold text-center uppercase ">
          <span className='text-black uppercase'>Influence the</span> workplace!
          </h1>
        <p className="text-black text-lg ">Connect with modern professionals in premium environments where business and personal purchase decisions are made!</p>
        
        <div className='flex flex-col lg:flex-row items-center justify-center '>

        <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
          
        <span className='flex items-center justify-center bg-black  rounded-2xl p-4 '>
        {/* <PublicIcon className='!text-[#e2689a]'/> */}
        {/* <h1  className='text-red-600 text-xl font-extrabold  py-2'>200%</h1>  */}
        <span className='px-8 py-3 '>
            <p className='text-red-600 text-lg'>High discretionary spending</p>
            <p className='text-[#adb5bd;] text-lg'>Working Professionals have a regular and steady income.</p>
        </span>
        </span>
        <span className='flex items-center justify-center bg-black  rounded-2xl p-4'>
        {/* <SmsIcon className='!text-[#e2689a]'/> */}
         {/* <h1 className='text-red-600 text-xl font-extrabold  py-2'>91%</h1> */}
        <span className=' px-8 py-3'>
         <p className='text-red-600 text-lg'>Tech-savvy and early adopters </p>
            <p className='text-[#adb5bd;] text-lg'>They often rely on digital platforms for their daily work & personal life.</p>
        </span>
        </span>
        <span className='flex items-center justify-center bg-black  rounded-2xl p-4 '>
        {/* <AccountBalanceIcon className='!text-[#e2689a]'/> */}
        {/* <h1  className='text-red-600 text-xl font-extrabold  py-2'>55%</h1> */}
        <span className='px-8 py-3 '>
          <p className='text-red-600 text-lg'>Brand-conscious & aspirational </p>
            <p className='text-[#adb5bd;] text-lg'>They are willing to invest in services that enhance their status.</p>
        </span>
        </span>
         </div>

       <div className='w-full '>
       <img src={ amezinfactImgnew.src} alt="img" className='w-full h-full' />
       </div>

       <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
       <span className='flex items-center justify-center bg-black  rounded-2xl p-4 '>
       {/* <CreditCardIcon className='!text-[#e2689a]'/> */}
       <h1  className='text-red-600 text-xl font-extrabold '>5M</h1>
        <span className='px-8 py-3 '>
          <p className='text-white text-lg'>The number of corporate employees will cross by 2024.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
        <span className='flex items-center justify-center bg-black  rounded-2xl p-4 '>
        {/* <LibraryBooksIcon className='!text-[#e2689a]'/> */}
        <h1  className='text-red-600 text-xl font-extrabold '>67%</h1>
        <span className='!px-8 !py-3'>
         <p className='text-white text-lg'> Increase in working professionals in flexible working spaces.</p>
            {/* <p className='text-[#adb5bd;] text-lg'>Sub Headline</p> */}
        </span>
        </span>
        <span className='flex items-center justify-center bg-black  rounded-2xl p-4 '>
        {/* <DirectionsBusFilledIcon className='!text-[#e2689a]'/> */}
        <h1  className='text-red-600 text-xl font-extrabold '>91%</h1>
        <span className='px-8 py-3 '>
        <p className='text-white text-lg'></p>
            <p className='text-[#adb5bd;] text-lg'>Consumers have more positive feelings about brands after joining events and experience</p>
        </span>
        </span>
       </div>

       </div>
      </section>
    );
}

export default Amazing;