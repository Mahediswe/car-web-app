import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import WhyUs from '../Components/WhyUs';
import OurMission from '../Components/OurMission';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyUs/>
        <OurMission/>
        <Footer/>

    </div>
  )
}

export default Home