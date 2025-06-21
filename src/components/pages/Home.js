import React from 'react'
import HeroSection from '../HeroSection'


import AboutSection from './About'
import Cards from './Cards'
import Footer from './Footer'
import TeamSection from './TeamSection'
import Location from './Location'
import GallerySection from './GallerySection'



function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <Cards />
        
        <GallerySection />
        <TeamSection />
        

        < Footer/>
        
    </div>
  )
}

export default Home;