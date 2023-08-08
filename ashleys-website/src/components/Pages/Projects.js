import React from 'react'
import '../../App.css';
import Cards from '../Cards'
import HeroSection from '../HeroSection';
import './Projects.css'
var Latex = require("react-latex")
function Projects({ project }) {
    const {id, imageSrc, title, downloadLink, subsections } = project;
    console.log("hi")
    console.log(project)
    // const projectData = {
    //     imageSrc: 'path/to/your/project-image.jpg',
    //     title: 'Sample Project',
    //     downloadLink: 'path/to/your/project-download-link',
    //     subsections: [
    //       'Introduction',
    //       'Methodology',
    //       'Results',
    //       'Conclusion',
    //       // Add more subsections as needed
    //     ],
    //   };
    return (
      <div className="project-page">
        hi
        <img src={imageSrc} alt={title} className="project-image" />
        <h2 className="project-title">{title}</h2>
        <a href={downloadLink} className="download-button">
          Download Project
        </a>
  
        <div className="subsections">
          {subsections.map((subsection, index) => (
            <div key={index} className="subsection">
              {subsection}
            </div>
          ))}
        </div>
      </div>
    );
  }
export default Projects;