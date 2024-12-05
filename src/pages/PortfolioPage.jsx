import React from 'react';
import '../styles/pages/Portfolio.scoped.scss';
import MainNavbar from '../components/MainNavbar';
import JinJooContent from '../components/JinJooContent';
import LokmanContent from '../components/LokmanContent';
import BBContent from '../components/BBContent';
import AmadeusContent from '../components/AmadeusContent';

const PortfolioPage = () => {
  // Liste des composants enfants
  const components = [
    { Component: JinJooContent, key: 'jinjoo', link: 'https://www.jin-joo.fr' },
    { Component: LokmanContent, key: 'lokman', link: 'https://www.lokman.fr' },
    { Component: AmadeusContent, key: 'amadeus', link: 'https://viktorchondria.com/salieri' },
    { Component: BBContent, key: 'bb', link: 'https://www.beau-bun.fr' },
  ];

  return (
    <div className="portfolioContainer">
      <MainNavbar />
      <h1 className="portfolioTitle">Portfolio</h1>
      <div className="portfolioWrapper">
        {components.map(({ Component, key, link }) => (
          <a
            href={link}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            className="cardLink"
          >
            <div className="cardContainer">
              <Component />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;