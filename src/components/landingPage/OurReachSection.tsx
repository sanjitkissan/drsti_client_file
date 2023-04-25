import { capture, icon1, icon2, icon3, icon4 } from "@/src/assets/landinPage";
import React from "react";

function OurReachSection() {
  return (
    <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center lg:my-24 my-12">
      <div>
        <h1 className="text-2xl lg:text-4xl text-black font-bold text-center mb-4 uppercase ">
          Our <span className="text-red-600">Reach</span> 
        </h1>
      </div>
      <div className="w-flex flex lg:flex-row flex-col items-center justify-center gap-2">
        <div className="w-full h-auto lg:h-[70vh]">
          <div className="w-full h-auto lg:h-[70vh]">
            <img src={capture.src} alt="img" className="w-full h-full " />
           
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start  gap-10">
          <h1 className="lg:text-2xl text-red-600  ">
            45,00,000+ <br />
            Corporate Professionals
          </h1>
          <p className="text-black lg:text-lg ">
          We have partnerships with over 150 flexible/hybrid workspaces and collaborate with top multinational corporations such as IBM, Facebook, TCS, Cognizant, Google, Amazon, LinkedIn, Deloitte, Wells Fargo, Target, Accenture, and many others to help brands reach affluent consumers at workplaces.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <span className="flex items-center justify-start gap-3">
              <img src={icon1.src} alt="img" className="h-28 w-28" />
              <p className="lg:text-lg text-black ">8 Metro Cities</p>
            </span>

            <span className="flex items-center justify-start gap-3">
              <img src={icon3.src} alt="img" className="h-28 w-28" />
              <p className="lg:text-lg text-black ">75+ Corporate Parks</p>
            </span>
            <span className="flex items-center justify-start gap-3">
              <img src={icon2.src} alt="img" className="h-28 w-28" />
              <p className="lg:text-lg text-black ">1500+ Media Touch Points</p>
            </span>
            <span className="flex items-center justify-start gap-3">
              <img src={icon4.src} alt="img" className="h-28 w-28" />
              <p className="lg:text-lg text-black ">
                Digital OOH network in over 300+ Corporate offices
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurReachSection;
