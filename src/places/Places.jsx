import React, { useEffect, useState } from "react";

import PlaceCard from "./PlaceCard";

function Places() {
  const [allPlaces, setAllPlaces] = useState([]);

  useEffect(() => {
    fetch("/data/datas.json")
      .then((res) => res.json())
      .then((data) => setAllPlaces(data))
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center">TARİHİ MEKANLAR</h1>
      <div>
        {allPlaces.map((place) => (
          <PlaceCard key={place.id} item={place} />
        ))}
      </div>
    </>
  );
}

export default Places;
