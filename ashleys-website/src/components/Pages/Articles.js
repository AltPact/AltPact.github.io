import React from 'react'
import '../../App.css';
import './Articles.css'
import HeroSection from '../HeroSection';
import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
    customElements.define("latex-js", LaTeXJSComponent)
// import Latex from 'react-latex-next';
var Latex = require("react-latex")
// import '../../LatexFolder/latex.html';



function Articles() {
  const fraction = `$$\\frac{2}{3}$$`
  const pythagorean = `$$a^2 + b^2 = c^2$$`
  const fundemental_theorem = `$$\\frac{d}{dx}\\int_{a}^{x}f(t)dt = f(x)$$`
  // const testing = `$$\\documentclass[11pt, a4paper, oneside, openright]$$`
  // const loadSnippet = document.querySelector('.target');
  const targetEl = document.querySelector('.target');
  const loadSnippet = () => {
    fetch(`../../LatexFolder/latex.html`)
    .then(res => {
      // This is taking from localhost/3000/LatexFolder/latex.html not actually navigating to the folder
      if (res.ok) {
        return res.text();
      }
    })
    .then(htmlsnippet => {
      targetEl.innerHTML = htmlsnippet;
    });
  };

  var meta = document.createElement('meta');
  meta.httpEquiv = "X-UA-Compatible";
  meta.content = "IE=edge";
  return (

    // <html lang='en'>
    // <head>
    // <div>LaTeX.js Web Component Test</div>
    <>
    <div class="target">Testing</div>
    <button onClick={loadSnippet}>View</button>
    <button onClick="loadSnippet()">View2</button>
    </>
    // <title>LaTeX.js Web Component Test</title>
    // </head>

    // <body>
    //   <h1>Compiling LaTeX</h1>

    //   <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">
    //     \documentclass[11pt, a4paper, oneside, openright]{article}

    //     \begin{document}
    //     \section{Test}
        
    //     \end{document}
    //   </latex-js>


    //   <latex-js hyphenate="false">
    //     Another.
    //   </latex-js>

    // </body>
    // </html>
    // </>
  );
}
export default Articles