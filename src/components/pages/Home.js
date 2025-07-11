import React from 'react'
import HeroSection from '../HeroSection'


import AboutSection from './About'
import Cards from './Cards'
import Footer from './Footer'
import TeamSection from './TeamSection'
import Location from './Location'
import GallerySection from './GallerySection'
import RegisterQuest from './Register'



function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <Cards />
        <RegisterQuest />
        <GallerySection />
        <TeamSection />
        

        < Footer/>
        
    </div>
  )
}

export default Home;