import Link from "next/link";
import React, { useState } from "react";
import { Main_Logo } from "../assets/navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PrivacyPolicy from "./PrivacyPolicy";
export default function NewFooter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-12">
      <div className="w-full main-container flex flex-col items-start justify-start gap-4 ">
        <picture className="w-auto h-20">
          <Link href={"/"}>
            <img src={Main_Logo.src} alt="" className="w-full h-full" />
          </Link>
        </picture>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4">
          <div className="w-full flex items-start justify-between">
            <div className="w-full flex-col items-start justify-start gap-4">
              <h1 className="text-xl font-bold cursor-pointer">Quick Links</h1>
              <Link href={"/about"}>
                <p className="text-lg font-medium cursor-pointer capitalize">
                  about
                </p>
              </Link>
              <Link href={"/services"}>
                <p className="text-lg font-medium cursor-pointer capitalize">
                  services
                </p>
              </Link>
              <Link href={"/blog"}>
                <p className="text-lg font-medium cursor-pointer capitalize">
                  blog
                </p>
              </Link>
              <span className="w-full flex items-center justify-start gap-4 mt-4">
                <InstagramIcon className="!text-pink-400 cursor-pointer !text-4xl" />
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/company/drsti-communications/posts/?feedView=all"
                  }
                >
                  <LinkedInIcon className="!text-blue-600 cursor-pointer !text-4xl" />
                </Link>
                <YouTubeIcon className="!text-red-600 cursor-pointer !text-4xl" />
              </span>
            </div>
            <div className="w-full flex-col items-start justify-start gap-4">
              <h1 className="text-lg font-bold text-white cursor-pointer">
                Quick Links
              </h1>
              <Link href={"/gallery"}>
                <p className="text-lg font-medium cursor-pointer capitalize">
                  gallery
                </p>
              </Link>
              {/* <p className='text-lg font-medium cursor-pointer capitalize'>FAQ</p> */}
              <p className="text-lg font-medium cursor-pointer capitalize" onClick={()=>{setIsOpen(true)}}>
                privacy policy
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-4">
            <Link href={"/workplace-partners"}>
              <span
                className={`  center p-4 cursor-pointer group shadow-[0_3px_10px_rgb(0,0,0,0.2)] active:scale-95`}
              >
                <h1 className="text-center text-2xl font-bold capitalize group-hover:text-red-600 transition-all duration-300 ease-in-out">
                  workplace partner
                </h1>
              </span>
            </Link>
            <p className="text-lg w-full text-center">
              if you operate a corporate campus and are interested in partnering
              with dRSTi, reach us here.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4 ">
            <p className="text-lg ">
              {" "}
              <span className="font-bold">Address:</span> 31, 8th Main, 10th
              Cross RMV Extension, Sankey Tank, Sadashiva Nagar, Bengaluru,
              Karnataka 560080
            </p>
            <p className="text-lg ">
              {" "}
              <span className="font-bold">Phone:</span> 096322 27286
            </p>
            <p className="text-lg ">
              {" "}
              <span className="font-bold">Hours:</span> Hours:10AM - 7:30PM
            </p>
          </div>
        </div>
        <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 py-2">
          <h1 className="px-4 text-base fount-bold  text-center">
            Copyright &copy; {new Date().getFullYear()} dRSTi Communications
          </h1>
          <h1 className="text-gray-400 capitalize">
            -{" "}
            <a
              className="underline"
              href="https://exogenoustechnology.com/"
              target={"_blank"}
            >
              website developed by ET -
            </a>{" "}
          </h1>
        </section>
      </div>
      <PrivacyPolicy isOpen={isOpen} setIsOpen={setIsOpen}/>
    </section>
  );
}
