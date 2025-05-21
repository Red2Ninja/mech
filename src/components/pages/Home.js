import React from 'react'
import HeroSection from '../HeroSection'
import Cards from './Cards'
import OrangeCard from './About'
import AboutSection from './AboutSection'
import Footer from './Footer'
import TeamSection from './TeamSection'
import Location from './Location'


function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <Cards />
        <Location />
        
        <TeamSection />
        

        < Footer/>
        
    </div>
  )
}

export default Home;