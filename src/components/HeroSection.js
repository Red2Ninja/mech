import React from 'react'
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <section id="home">
    <div className = 'hero-container'>
        <video src='./videos/mech_hero.mp4' autoPlay loop muted></video>
       
        </div>
        </section>
  )
}

export default HeroSection;
