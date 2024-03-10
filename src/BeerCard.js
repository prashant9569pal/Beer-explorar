// src/BeerCard.js
import React from "react";

const BeerCard = ({ beer, onShowModal }) => {
  return (
    <div className="card mb-4">
      <img src={beer.image_url} alt={beer.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.tagline}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onShowModal(beer)}
        >
          Show More Details
        </button>
      </div>
    </div>
  );
};

export default BeerCard;
