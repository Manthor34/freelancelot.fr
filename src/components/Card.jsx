import React from 'react';

function Card({ imgSrc, title, content }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}

export default Card;