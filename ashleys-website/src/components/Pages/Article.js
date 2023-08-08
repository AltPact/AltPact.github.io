import React from 'react'
import '../../App.css';
import './Articles.css'
import HeroSection from '../HeroSection';
// import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
//     customElements.define("latex-js", LaTeXJSComponent)
// import Latex from 'react-latex-next';
// import AshTech from 'node_module/public/images/Ash.svg'

// var Latex = require("react-latex")
// import '../../LatexFolder/latex.html';
// import htmlFile from './LatexFolder/latex.html'


const Article = ({ title, content, tag }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
      if (tag == "games") {
        <div className='tag.green'>{tag}</div>
      } else {
        
      }
      <p>{tag}</p>
    </div>
  );
};

function tagParameter(params) {
  if (params == "games") {
    return (
      <div className='tag.green'>{tag}</div>
    )
  } else if (params == "pie"){
      <div className='tag.orange'>{tag}</div>
  } else {
    return (
      <div className='tag.blue'>{tag}</div>
    )
  }
};
// function Article(){
//   const Articles = ({ title, content }) => {
//     return (
//       <div className="article">
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     );
//   };
// }

export default Article;
