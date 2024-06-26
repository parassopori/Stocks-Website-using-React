import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Navbar from '../Navbar';
import Pricing from './Pricing';
import Stats from './Stats';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
      <>

      
      <Hero />
      <Awards/>
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      

      </>  
        

     );
}

export default HomePage;