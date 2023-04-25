import OurPartners from "../components/about/OurPartners";
import MainForm from "../components/form/MainForm";
import Brandactivation from "../components/landingPage/BrandActivation";
import OurWork from "../components/landingPage/OurWork";
import Breadcrumb from "../components/services/Breadcrumb";
import HeroSection from "../components/services/HeroSection";
import OurImpactResponsive from "../components/services/OurImpactResponsive";
import OurPortfolio from "../components/services/OurPortfolio";
import WorkForResult from "../components/services/WorkForResult";
import MainLayout from "../layouts/MainLayout";


export default function Services(){
    return(
        <MainLayout>
            <MainForm/>
            <Breadcrumb/>
            {/* <HeroSection/> */}
            <WorkForResult/>
            <OurWork/>
      <Brandactivation/>
      <OurPartners/>
           
        </MainLayout>
    )
}