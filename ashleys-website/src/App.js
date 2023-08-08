// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Header/Navbar'
import {Routes , Route, Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import ArticleList from './components/Pages/ArticleList'
import Blog from './components/Pages/Blog'
import SignUp from './components/Pages/SignUp';
import Projects from './components/Pages/Projects'
import projectData from './components/Pages/projectData';
// import articleLatex from './LatexFolder/latex'

function App() { 
  // const projectData = {
  //   imageSrc: 'path/to/your/project-image.jpg',
  //   title: 'Sample Project',
  //   downloadLink: 'path/to/your/project-download-link',
  //   subsections: [
  //     'Introduction',
  //     'Methodology',
  //     'Results',
  //     'Conclusion',
  //     // Add more subsections as needed
  //   ],
  // };
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/about' exact Component={About} />
            <Route path='/articles' Component={ArticleList} />
            <Route path='/blog' exact Component={Blog} />
            <Route path='/sign-up' exact Component={SignUp} />
            <Route path="/projects/:projectId" render={({ match }) => {
              const projectId = parseInt(match.params.projectId);
              const selectedProject = projectData.projects.find(project => project.id === projectId);
              
              if (!selectedProject) {
                // Handle not found scenario
                return <div>Project not found</div>;
              }
              console.log("selected Project",selectedProject)

              return <Projects project={selectedProject} />;
            }} />
          </Routes>  
      </BrowserRouter>
  )
}

export default App;
