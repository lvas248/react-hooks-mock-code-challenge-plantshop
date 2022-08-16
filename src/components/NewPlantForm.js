import React, { useState } from "react";

function NewPlantForm({ addNewPlantToState }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function submitNewPlant(e){
    e.preventDefault()
    fetch('http://localhost:6001/plants',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => addNewPlantToState(data))
    setNewPlant({name:"", image:"", price:""})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={(e)=> setNewPlant({...newPlant, name: e.target.value})}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={(e)=> setNewPlant({...newPlant, image: e.target.value})}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={(e)=> setNewPlant({...newPlant, price: parseInt(e.target.value)})}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
