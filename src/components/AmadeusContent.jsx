import React from 'react';
import Aimg from "../assets/port-amadeus.jpg";

function AmadeusContent() {
  return (
    <div>
      <img src={Aimg} alt="Amadeus" />
      <h3>Amadeus</h3>
      <p>
        Amadeus est une application React qui utilise Live2D pour animer des personnages interactifs et l'API OpenAI pour offrir des fonctionnalités conversationnelles intelligentes. Conçue pour être un assistant interactif, Amadeus combine technologie et simplicité pour une expérience utilisateur accessible et engageante.
      </p>
    </div>
  );
}

export default AmadeusContent;