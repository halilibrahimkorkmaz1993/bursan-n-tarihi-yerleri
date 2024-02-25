import React from "react";

function PlaceCard({ item }) {
  return (
    <div>
      <div className="card">
        <img src={item.image} className="card-img-top" alt={item.ad} />
        <div className="card-body">
          <h5 className="card-title">{item.ad}</h5>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
