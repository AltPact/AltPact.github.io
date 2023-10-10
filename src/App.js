import React from 'react';
import Navbar from './Componenets/Navbar';
import { BrowserRouter, Routes, Route, Switch, Router } from 'react-router-dom';
import Home from './Componenets/Home';
import Blogs from './Componenets/ArticleList';
// import MyWork from './Componenets/MyWork';
import NoPage from './Componenets/NoPage';
import Layout from './Componenets/Layout';
import MyWork from './Componenets/MyWork';
import AboutMe from './Componenets/AboutMe';
// import FullArticle from './Componenets/FullArticle';
import ArticleList from './Componenets/ArticleList';
// import './App.css';
import Footer from './Componenets/Footer';

function App() {
  return (

    <React.Fragment>
      <Navbar/>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="my-work" element={<MyWork />} />
            <Route path="articles" element={<ArticleList />} />
            <Route path="about-me" element={<AboutMe />} />
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
