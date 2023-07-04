import React from "react";
import { useState } from "react";
import card from './card.css';


const Card = (props) => {
    const tacos = props.tacos;
    const [counter, setCounter] = useState (0)
    

   

return (
  
  <div className='card-container'>
    <div>
    {tacos.map((taco)=>
    <div className='propss' key = {taco.id}>
      <div className="image-container">
      <img src={taco.img}/>
      </div>
    <div className="card-content">
      <div className="card-title">
        <h2>{taco.name}</h2>
      </div>
      <div className="card-body">
        <p>{taco.description}</p>
      </div>
      <div className='btn'>
      <button className='add' onClick={() => setCounter(counter + 1)}>
        Agregar        
      </button>
      <button className='borrar' onClick={() => setCounter(counter - 1 )} disabled = {counter === 0}>
        Quitar
      </button>
      <button className='reset' onClick={() => setCounter (0)} disabled = {counter === 0 }>
        Reset
      </button>
      <div className='total'>
        {counter}
      </div>
    </div>
    </div>
                
  </div>
    )}
  </div>        
    

    </div> 
 

  
  
 
  
  
);
}
   

export default Card;


/*
const tacos = [
  {
    id: 1,
    name: "Chicharron",
    description: "Placeholder Text",
    price: 15,
  },
  {
    id: 2,
    name: "Carnitas",
    description: "Placeholder Text",
    price: 15,
  },
  {
    id: 3,
    name: "Huevo con Chorizo",
    description: "Placeholder Text ",
    price: 15,
  },
  {
    id: 4,
    name: "Guisado de Puerco",
    description: "Placeholder Text",
    price: 18,
  },
  {},



];*/

/*<div className='card-container'>
    <div className='image-container'>
      <img src='./images/chicharron.jpg' alt='chicharron'></img>
    </div>
    <div className="card-content">
    <div className='card-title'>
      <h2>Taco de chicharron</h2>
    </div>
    <div className='card-body'>
      <p>Taco de Maiz o Harina con Chicharron 100% de puerco;
        con su limon, sal y salsa para complementar.
      </p>
    </div>
    <div className='btn'>
      <button className='add' onClick={() => setCounter(counter + 1)}>
        Agregar        
      </button>
      <button className='borrar' onClick={() => setCounter(counter - 1 )} disabled = {counter === 0}>
        Quitar
      </button>
      <button className='reset' onClick={() => setCounter (0)} disabled = {counter === 0 }>
        Reset
      </button>
      <div className='total'>
        {counter}
      </div>
    </div>

    </div> 
 
  </div>*/

   /*<div>
    {tacos.map((taco)=>
    <div className='propss' key = {taco.id}>
    <div>
      <img src={taco.img}/>
    </div>
    <h2>{taco.name}</h2>
    <p>{taco.description}</p>        
  </div>
    )}
  </div>*/