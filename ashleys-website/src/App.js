// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Header/Navbar'
import {Routes , Route, Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Articles from './components/Pages/Articles'
import ArticlePage1 from './components/Pages/ArticlesList/ArticlePage1'
import Blog from './components/Pages/Blog'
import SignUp from './components/Pages/SignUp';
import articleLatex from './LatexFolder/latex'

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/about' exact Component={About} />
            <Route path='/articles' exact Component={Articles} />
            <Route path='/articles/1' exact Component={ArticlePage1} />
            
            <Route path='/blog' exact Component={Blog} />
            <Route path='/sign-up' exact Component={SignUp} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
