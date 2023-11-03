import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Home />
        <About />
        <Resume />
        <Portfolio />
      </div>  
    </>
  )
}

export default App;