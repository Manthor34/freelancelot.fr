import React, { useState, useEffect } from 'react';
import "../styles/pages/Services.scoped.scss";
import MainNavbar from '../components/MainNavbar';
import www from '../assets/WWW-logo.png';
import ai from '../assets/AI-logo.png';

function ServicesPage() {
  // États pour gérer l'affichage des contenus étendus
  const [showWebFull, setShowWebFull] = useState(window.innerWidth > 750);
  const [showAIFull, setShowAIFull] = useState(window.innerWidth > 750);

  // Ajuster l'affichage lors du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setShowWebFull(true);
        setShowAIFull(true);
      } else {
        setShowWebFull(false);
        setShowAIFull(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Nettoyer le listener lors du démontage du composant
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleWebContent = () => {
    setShowWebFull(!showWebFull);
  };

  const toggleAIContent = () => {
    setShowAIFull(!showAIFull);
  };

  return (
    <div className="services">
      <MainNavbar />
      <h1>SERVICES</h1>
      <div className="cards">
        {/* Carte Développement Web */}
        <div className="serviceCard web">
          <img src={www} alt="Développement Web" />
          <h2>Développement Web</h2>
          <p>
            Plongez dans l'avenir du développement web grâce à nos services spécialisés. 
            En exploitant les capacités robustes de React, Vue et JavaScript classique, 
            nous livrons des sites et des applications performants, conçus pour répondre 
            aux exigences modernes des entreprises et des utilisateurs.
          </p>
          {showWebFull && (
            <div className="servicesText">
              <p>
                <span className="spanServices">Développement React :</span> Offrez à vos utilisateurs une expérience fluide grâce à nos solutions React. 
                Réputé pour son efficacité et son architecture flexible, React nous permet de créer des interfaces utilisateur dynamiques, rapides et évolutives.
              </p>
              <p>
                <span className="spanServices">Développement Vue :</span> Simplifiez et accélérez votre chemin vers une présence web captivante avec Vue. 
                Ce framework progressif est la pierre angulaire de notre approche pour créer des applications web interactives et modernes.
              </p>
              <p>
                <span className="spanServices">Maîtrise de JavaScript :</span> Au-delà des frameworks, notre expertise en JavaScript classique nous permet 
                de peaufiner chaque aspect des fonctionnalités de votre site. Animations personnalisées ou fonctionnalités interactives, 
                nous garantissons un site engageant et impeccable.
              </p>
            </div>
          )}
          <button onClick={toggleWebContent}>
            {showWebFull ? "Voir moins" : "Lire la suite"}
          </button>
        </div>

        {/* Carte Consultation IA */}
        <div className="serviceCard ia">
          <img src={ai} alt="Consultation et Développement en IA" />
          <h2>Consultation et Développement en IA</h2>
          <p>
            Entrez dans l'ère des opérations intelligentes avec nos services de consultation en intelligence artificielle. 
            En développant le web de demain avec React, Vue et JavaScript, nous ouvrons également la voie à des solutions commerciales 
            plus intelligentes grâce à l'IA.
          </p>
          {showAIFull && (
            <div className="servicesText2">
              <p>
                <span className="spanServices">Consultation IA sur mesure :</span> Notre consultation consiste à comprendre les besoins de votre entreprise, 
                à identifier les processus améliorables grâce à l'IA, et à mettre en œuvre des solutions d'analyse de données et d'apprentissage automatique.
              </p>
              <p>
                <span className="spanServices">Développement de stratégies IA :</span> Nous créons des stratégies IA personnalisées qui s'alignent sur vos objectifs commerciaux. 
                Nos solutions pratiques et innovantes améliorent la prise de décision et automatisent les flux de travail.
              </p>
            </div>
          )}
          <button onClick={toggleAIContent}>
            {showAIFull ? "Voir moins" : "Lire la suite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
