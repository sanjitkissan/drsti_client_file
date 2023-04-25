import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import { ReactElement } from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import NewFooter from './NewFooter';
import ResponsiveNaveBar from './ResponsiveNaveBar';
type prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  };
export default function MainLayout({children ,title="dRSTi"}:prop) {
  const [isHidden, setIsHidden] = useState<boolean>(false)
  useEffect(() => {
    const timer = setTimeout(() => setIsHidden(true), 259200000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className={`${isHidden && "hidden"}`}>
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/drsti_logo.jpg"></link>
    </Head>
    <ResponsiveNaveBar/>
     <Navbar/>
     <>{children}</>
     {/* <Footer/>  */}
     <NewFooter/>
    </section>
  )
}
