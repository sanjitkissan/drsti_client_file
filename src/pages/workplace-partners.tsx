import React from 'react';
import MainForm from '../components/form/MainForm';
import OurImpactResponsive from '../components/services/OurImpactResponsive';
import OurPortfolio from '../components/services/OurPortfolio';
import Breadcrumb from '../components/workplace/Breadcrumb';
import Oursolutions from '../components/workplace/Oursolutions';
import Partners from '../components/workplace/Partners';
import Workplace from '../components/workplace/Workplace';
import MainLayout from '../layouts/MainLayout';

function WorkplacePartners() {
    return (
        <MainLayout>
            <MainForm/>
            <Breadcrumb/>
            <Workplace/>
            <Oursolutions/>
            <OurPortfolio/>
            <OurImpactResponsive/>
            <Partners/>
        </MainLayout>
    )
}

export default WorkplacePartners;