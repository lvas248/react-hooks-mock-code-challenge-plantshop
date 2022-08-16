import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPLantList] = useState([])
  const [ search, setSearch ] = useState("")

  function handleSearch(string){
    setSearch(string)
  }

  useEffect(()=>{
    fetch(' http://localhost:6001/plants')
    .then(res=> res.json())
    .then(data => setPLantList(data))
  }, [])

  function addNewPlantToState(obj){
    setPLantList([...plantList, obj])
  }

  const filteredPlants = plantList.filter( plant =>{
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function updatePrice(plantObj){
    setPLantList(plantList.map(plant =>{
      if(plant.id === plantObj.id){
        return plantObj
      } else return plant
    }))
  }

  function deletePlantFromState(id){
    setPLantList(plantList.filter( plant =>{
      return plant.id !== id
    }))

  }


  return (
    <main>
      <NewPlantForm addNewPlantToState={addNewPlantToState}/>
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList  plantList={filteredPlants} updatePrice={updatePrice} deletePlantFromState={deletePlantFromState}/>
    </main>
  );
}

export default PlantPage;
