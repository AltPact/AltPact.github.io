// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Header/Navbar'
import {Routes , Route, Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Articles from './components/Pages/Articles'
import Blog from './components/Pages/Blog'

function App() {
  return (
      <BrowserRouter>
          {/* <Header /> */}
          <Navbar/>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/about' exact Component={<About />} />
            <Route path='/articles' exact Component={<Articles />} />
            <Route path='/blog' exact Component={<Blog />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
