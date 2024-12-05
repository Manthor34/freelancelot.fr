import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import "../styles/pages/Home.scoped.scss";
import banner from "../assets/cover_freelancelot.png";
import wave from "../assets/wave3.png";
import clouds from "../assets/nuages.png";
import services from "../assets/services2.png";
import team from "../assets/team2.png";
import contact from "../assets/contact2.png";
import portfolio from "../assets/portfolio2.png";
import arrow from "../assets/arrow-down.svg";
import FadeIn from 'react-fade-in/lib/FadeIn';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);

  const scrollToIntroduction = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // relative to the viewport
        threshold: 0.1, // 10% of the element should be visible
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, [introRef]);

  return (
    <div className="homeContainer">
      <div className="bannerContainer">
        <img src={banner} alt="bannière Freelancelot" className="banner" />
        <div className="waveContainer">
          <div className="wave wave1" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave2" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave3" style={{ backgroundImage: `url(${wave})` }}></div>
          <div className="wave wave4" style={{ backgroundImage: `url(${wave})` }}></div>
        </div>
      </div>
      <div>
        <button className="buttonScroll" onClick={scrollToIntroduction}>
          <img src={arrow} alt="bouton pour défiler" />
        </button>
      </div>
      <FadeIn visible={isVisible} transitionDuration={1500}>
        <div className="introduction" ref={introRef}>
          <h2>Bienvenue chez FREE LANCELOT!</h2>
          <p>
            La forge numérique où l'innovation rencontre la fonction. Fondée par un duo de développeurs web passionnés,
            nous nous spécialisons dans la création d'expériences web de pointe utilisant React. Notre projet passion
            est de développer des solutions IA sur mesure que nous visons à intégrer de manière transparente dans les
            futurs sites web, applications, et au-delà.
          </p>
        </div>
      </FadeIn>
      <FadeIn visible={isVisible} delay={500} transitionDuration={2500}>
        <div className="page">
          <Link to="/services">
            <div className="linkContainer linkServices">
              <img src={services} className="imgLink imgServices" alt="bouton services" />
              <h3>SERVICES</h3>
            </div>
          </Link>
          <Link to="/portfolio">
            <div className="linkContainer linkPortfolio">
              <img src={portfolio} className="imgLink imgPortfolio" alt="bouton portfolio" />
              <h3>PORTFOLIO</h3>
            </div>
          </Link>
          <Link to="/team">
            <div className="linkContainer linkTeam">
              <img src={team} className="imgLink imgTeam" alt="bouton équipe" />
              <h3>ÉQUIPE</h3>
            </div>
          </Link>
          <Link to="/contact">
            <div className="linkContainer linkContact">
              <img src={contact} className="imgLink imgContact" alt="bouton contact" />
              <h3>CONTACT</h3>
            </div>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}

export default HomePage;
