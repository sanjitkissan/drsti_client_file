import Blogpageiner from "../components/blogpage/Blogpageiner";
import MainForm from "../components/form/MainForm";
import Brandactivation from "../components/landingPage/BrandActivation";
import Breadcrumb from "../components/landingPage/Breadcrumb";
import CardSection from "../components/landingPage/CardSection";
import HeroSection from "../components/landingPage/HeroSection";
import MessageSection from "../components/landingPage/MessageSection";
import NewBreadcrumb from "../components/landingPage/NewBreadcrumb";
import OurReachSection from "../components/landingPage/OurReachSection";
import OurWork from "../components/landingPage/OurWork";
import RoadMap from "../components/landingPage/RoadMap";
import RoadMapResponsive from "../components/landingPage/RoadMapResponsive";
import SesponsiveBreadcrumb from "../components/landingPage/SesponsiveBreadcrumb";
import MainLayout from "../layouts/MainLayout";




export default function Home() {
  return (
    <MainLayout>
      {/* <Blogpageiner/> */}
      <MainForm/>
      <SesponsiveBreadcrumb/>
      
      <Breadcrumb/>
      <HeroSection/>
      <RoadMap/>
      <RoadMapResponsive/>
      <OurReachSection/>
      <CardSection/>
      
      <MessageSection/>
    </MainLayout>
  )
}
