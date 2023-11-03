import React from 'react';
import './home.css';
import Me from "../../assets/photo-1.JPG"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">TITI Pharell</h1>
        <span className="home_education">Je suis un étudiant en BTS SIO SLAM</span>
        <HeaderSocials />
        <a href="#contact" className="btn">Recrutez Moi</a>
        <ScrollDown />
      </div>
     {/*<Shapes />*/}
    </section>
  )
}

export default Home;