import React, {useState} from "react";

function PlantCard({ id, price, name, image, updatePrice, deletePlantFromState }) {

  const [inStock, setInStock] = useState(true)
  const [editClicked, setEditClicked] = useState(false)
  const [newPrice, setNewPrice] = useState("")

  function handleBtnClick(e){
    if(e.target.className === "primary"){
      setInStock(!inStock)
    }else{
      setInStock(!inStock)
    }
  }

  function handleNewPriceSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        price: parseFloat(newPrice).toFixed(2)
      })
    })
    .then(res => res.json())
    .then( data => updatePrice(data))
    setEditClicked(!editClicked)
  }
  
  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "DELETE"
    })
    .then(res=> res.json())
    .then(data => deletePlantFromState(id))
  }

  const formInsert = 
    <form onSubmit={handleNewPriceSubmit}>
      <input placeholder="new price" value = {newPrice} onChange={(e)=> setNewPrice(e.target.value)}></input>
      <button type="submit" onSubmit={()=> handleNewPriceSubmit}>submit</button>
    </form>
  

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {editClicked ? null : <button onClick={()=> setEditClicked(!editClicked)}>Edit Price</button>} 
      {editClicked ? formInsert : null }
     
      {inStock === true ? (
        <button onClick={handleBtnClick}className="primary">In Stock</button>
      ) : (
        <button onClick={handleBtnClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
