import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
var Latex = require("react-latex")

function Articles() {
  const fraction = `$$\\frac{2}{3}$$`
  const pythagorean = `$$a^2 + b^2 = c^2$$`
  const fundemental_theorem = `$$\\frac{d}{dx}\\int_{a}^{x}f(t)dt = f(x)$$`
  
  return (
    <div style={{fontsize: 30}}>
      <Latex>
        {fraction} 
      </Latex>
      <hr/>
      <Latex>
        {pythagorean}
      </Latex>
      <hr/>
      <Latex>
        {fundemental_theorem}
      </Latex>
    </div>
    );
}
export default Articles