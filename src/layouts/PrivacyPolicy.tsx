import { Dialog } from "@mui/material";
import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import  { Dispatch, SetStateAction } from 'react'
import CloseIcon from '@mui/icons-material/Close';
export default function PrivacyPolicy(prop: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }) {
  
  return (
    <section className="w-full main-container ">
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={prop.isOpen}
        onClose={() => {
          prop.setIsOpen(false);
        }}
      >
        <section className="w-full h-full flex flex-col items-start justify-start p-8 gap-4 relative">
        <CloseIcon className='!text-red-600 !font-bold absolute top-5 right-5 cursor-pointer' onClick={()=>{prop.setIsOpen(false)}}/>
          <h1 className="text-2xl font-bold">
            At drsti communication, we take your privacy seriously. This privacy
            policy outlines the types of personal information we collect, how we
            use it, and your rights in relation to that information.
          </h1>
          <h2 className="pl-4 ">
            1. Information we collect When you visit our website, we may collect
            certain types of information, including
          </h2>
          <p className="pl-4 flex items-start justify-start gap-4">
            <CircleIcon className="!text-xs mt-2"/>  Personal information you provide to us, such as your
            name, email address, and phone number when you fill out a form or
            sign up for an account.
          </p>

          <p className="pl-4 flex items-start justify-start gap-4">
            <CircleIcon className="!text-xs mt-2" /> Usage data, such as the pages you visit on our site,
            the time and date of your visit, your IP address, and your browser
            type.
          </p>

          <h2 className="pl-4">
            2. How we use your information We use the information we collect to:
          </h2>
          <p className="pl-4 flex items-start justify-start gap-4">
            <CircleIcon  className="!text-xs mt-2"/> Provide and improve our services to you.
          </p>
           <p className="pl-4 flex items-start justify-start gap-4">
            <CircleIcon  className="!text-xs mt-2"/>Respond to your requests or inquiries.
          </p>
          <p className="pl-4 flex items-start justify-start gap-4">
            <CircleIcon  className="!text-xs mt-2"/>Communicate with you about our services and promotions.
          </p>
          <p className="pl-4 flex items-start justify-start gap-4">
            <CircleIcon  className="!text-xs mt-2"/>Analyze and improve our website and services.
          </p>
          <h2 className="pl-4">
            3. Sharing your information 
          </h2>
          <p className="pl-4">
          We do not sell, trade, or rent your personal information to third parties. However, we may share your information with third-party service providers who assist us in operating our website and providing our services. We may also share your information if required by law or in the event of a merger or acquisition.
          </p>
          <h2 className="pl-4">
            4. Cookies and other tracking technologies
          </h2>
          <p className="pl-4">We may use cookies and other tracking technologies to collect information about your use of our website. Cookies are small files that are stored on your device when you visit a website. They help us personalize your experience and improve our services. You can disable cookies in your browser settings, but this may affect your ability to use certain features of our website.</p>
          <h2 className="pl-4">5. Your rights </h2>
          <p className="pl-4">You have the right to access, update, and delete your personal information at any time. You also have the right to object to the processing of your information, as well as the right to data portability. If you would like to exercise any of these rights, please contact us using the information below.</p>
          <h2 className="pl-4">6. Changes to this policy</h2>
          <p className="pl-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>
          <h2 className="pl-4">7. Contact us</h2>
          <p className="pl-4">If you have any questions or concerns about our privacy policy, please contact us at:</p>
          <p>drstionline.com dRSTi Communication, 31, 8th Main, 10th Cross RMV Extension, Sankey Tank, Sadashiva Nagar, Bengaluru, Karnataka 560080 email: enquiry@drstionline.com</p>
        </section>
      </Dialog>
    </section>
  );
}
