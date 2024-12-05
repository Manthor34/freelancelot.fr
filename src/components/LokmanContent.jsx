import React from 'react';
import Limg from "../assets/port-lokman.jpg";

function LokmanContent() {
  return (
    <div>
      <img src={Limg} alt="Lokman.fr" />
      <h3>Lokman.fr</h3>
      <p>
        Lokman.fr est un site internet conçu par mon associé Lokman Ramdani en
        React. Il repose sur une base de données Firebase pour gérer les
        contenus et inclut un dashboard intuitif permettant d’ajouter
        facilement des actualités et des mises à jour sur le site.
      </p>
    </div>
  );
}

export default LokmanContent;