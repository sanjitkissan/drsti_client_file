import React from 'react'
import MainForm from '../components/form/MainForm'
import Breadcrumb from '../components/gallery/Breadcrumb'
import HeroSection from '../components/gallery/HeroSection'
import Photos from '../components/gallery/Photos'
import MainLayout from '../layouts/MainLayout'

export default function Gallery() {
  return (
    <MainLayout>
      <MainForm/>
      <Breadcrumb/>
      <HeroSection/>
      <Photos/>
    </MainLayout>
  )
}
