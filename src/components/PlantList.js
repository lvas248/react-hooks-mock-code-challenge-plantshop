import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, updatePrice, deletePlantFromState }) {

  const plantCards = plantList.map(plant =>{
    return <PlantCard key={plant.id} deletePlantFromState={deletePlantFromState} updatePrice={updatePrice} id={plant.id} name={plant.name} price={plant.price} image={plant.image}/>
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
