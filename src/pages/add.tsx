
import Head from "next/head";
import MainForm from "../components/form/MainForm";
import AboutUs from "../components/newladingpage/AboutUs";
import Amazing from "../components/newladingpage/Amazing";
import Breadcrumb from "../components/newladingpage/Breadcrumb";
import CardSection from "../components/newladingpage/CardSection";
import Header from "../components/newladingpage/Header";
import NewSection from "../components/newladingpage/NewSection";
import NewSlider from "../components/newladingpage/NewSlider";
import OurTeam from "../components/newladingpage/OurTeam";
import ResponsiveSlider from "../components/newladingpage/ResponsiveSlider";
import Testimonials from "../components/newladingpage/Testimonials";
import Footer from "../layouts/Footer";
import ResponsiveNewSection from "../components/newladingpage/ResponsiveNewSection";
import NewFooter from "../layouts/NewFooter";

export default function Add ({title="dRSTi"}){
    return(

        <>
            <Head>
        <title>{title}</title>
        <link rel="icon" href="/drsti_logo.jpg"></link>
    </Head>
    <MainForm/>
           <Header/>
        <Breadcrumb/>
        <NewSection/>
      <ResponsiveNewSection/>
           {/* <NewSlider/>  */}
           {/* <ResponsiveSlider/> */}
      <AboutUs/>
      <Amazing/>
      {/* <Testimonials/> */}
      {/* <OurTeam/> */}
      <CardSection/>
      <NewFooter/>
        </>
    )
}