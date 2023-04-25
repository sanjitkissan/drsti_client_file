import React from 'react';
import Breadcrumb from '../components/about/Breadcrumb';
import CreateEvents from '../components/about/CreateEvents';
import OurPartners from '../components/about/OurPartners';
import OurTeam from '../components/about/OurTeam';
import WhyChoose from '../components/about/WhyChoose';
import MainForm from '../components/form/MainForm';
import MainLayout from '../layouts/MainLayout';


function About() {
    return (
        <MainLayout>
            <MainForm/>
            <Breadcrumb/>
            <CreateEvents/>
            <WhyChoose/>
            <OurTeam/>
        </MainLayout>
    );
}

export default About;