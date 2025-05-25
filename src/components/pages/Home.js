import React from 'react'
import HeroSection from '../HeroSection'
import Cards from './Cards'

import AboutSection from './About'
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