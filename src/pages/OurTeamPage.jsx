import React, { useState } from 'react';
import MainNavbar from '../components/MainNavbar';
import "../styles/pages/Team.scoped.scss";
import lancelot from "../assets/portrait-lancelot.jpg";
import lokman from "../assets/pp-placeholder.jpg";

function OurTeamPage() {
  const [showFullLancelot, setShowFullLancelot] = useState(window.innerWidth > 750);

  // Toggle functions for each team member
  const toggleLancelotContent = () => {
    setShowFullLancelot(!showFullLancelot);
  };

  return (
    <div className="teamContainer">
      <MainNavbar />
      <h1>NOTRE ÉQUIPE</h1>
      <div className="teamCardsContainer">
        <div className="lancelot">
          <img src={lancelot} alt="portrait de Lancelot" className="imgProfile" />
          <div className="text">
            <h3>Lancelot CARRAU</h3>
            {showFullLancelot && (
              <p>
                Bonjour ! Je m'appelle Lancelot, développeur web passionné et aventurier dans l'âme. Mon parcours atypique m'a conduit à vivre sur un bateau, où j'ai appris à m'adapter à toutes les situations, puis à m'immerger dans la culture technologique japonaise, une expérience qui a profondément enrichi ma vision du numérique. Fort d'une année d'expérience professionnelle dans le développement web, je me consacre à la création de sites performants et intuitifs, conçus pour naviguer aussi fluidement que mes aventures sur les flots. Chaque projet est pour moi une opportunité d'allier créativité, expertise technique et ouverture sur le monde.
              </p>
            )}
            <button
              onClick={toggleLancelotContent}
              className={showFullLancelot ? 'show-less' : 'read-more'}
            >
              {showFullLancelot ? 'Voir Moins' : 'Lire la Bio'}
            </button>
          </div>
        </div>
        <div className="lokman">
          <div className="text">
            <h3>Lokman RAMDANI</h3>
            <p>
            Bonjour ! Je m'appelle Lokman, développeur passionné par l'art numérique et la technologie. Après un baccalauréat littéraire à Montpellier et un séjour linguistique à Tokyo, j'ai débuté ma carrière en tant que développeur web, réalisant des projets avec React.js et Vue.js. Par la suite, j'ai obtenu un diplôme en IA et data pour approfondir mes compétences et explorer de nouveaux horizons technologiques.
            </p>
          </div>
          <img src={lokman} alt="portrait de Lokman" className="imgProfile" />
        </div>
      </div>
    </div>
  );
}

export default OurTeamPage;
