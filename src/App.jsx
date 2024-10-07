import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Product from './Components/Product';
import Footer from './Components/Footer';

import Contact from './Components/Contact';
import OurService from './Components/OurService';
import OurMission from './Components/OurMission';
import WhyUs from './Components/WhyUs';
import FeatureCar from './Components/FeatureCar';
//import 'bootstrap/dist/css/bootstrap.min.css';


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Product from './Components/Product';
// import Aboutt from './pages/Aboutt';
// import Services from './pages/Services';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Product/>
      <FeatureCar/>
      <OurService/>
      <OurMission/>
      <WhyUs/>
      <Contact/>
      <Footer/>


     {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutt />} />
          <Route path="/cars" element={<Product />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter> */}
     

    </div>
  )
}

export default App