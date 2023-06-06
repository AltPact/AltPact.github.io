import React from 'react'
import '../../App.css';
import Cards from '../Cards'
import HeroSection from '../HeroSection';
var Latex = require("react-latex")
function Home() {
  return (
    <div>
      <HeroSection/>
      <Cards/>
    </div>
    );
}
export default Home