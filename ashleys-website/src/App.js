// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Header/Navbar'
import {Routes , Route, Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Articles from './Pages/Articles'
import Blog from './Pages/Blog'

function App() {
  return (
      <BrowserRouter>
          {/* <Header /> */}
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
