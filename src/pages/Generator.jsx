import React, { useState } from "react";
import PlacesName from "../components/PlacesName";

const Generator = () => {
  const [randomPlace, setRandomPlace] = useState("");

  const generateRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * PlacesName.length);
    const selectedPlace = PlacesName[randomIndex];
    setRandomPlace(selectedPlace);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Bursa'nın Rastgele Mekanı</h2>
              {randomPlace && <h4 className="card-text text-center">{randomPlace}</h4>}<hr/>
              <button className="btn btn-success d-block mx-auto mb-4" onClick={generateRandomPlace}>Nereye Gitsem?</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
