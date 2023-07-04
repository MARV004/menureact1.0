import React from 'react';
import  './App.css';
import NavBar from './components/NavBar' ;
import Card from './components/Card';
import { useState } from "react"


const  App = () => {

const [tacos, setTacos] = useState (
    [
      {
      id: 1,
      name: "Chicharron",
      description: "Taco de Maiz o Harina con Chicharron 100% de puerco con su limon, sal y salsa para complementar", 
      img:"./images/chicharron.jpg",
      price: 18
      },
      {
      id: 2,  
      name: "Papa con Chorizo",
      description: "Taco de harina o de maiz con el mas fino chorizo artesanal traido de tierras tamaulipecas", 
      img:"./images/tacoschorizo.jpg",
      price: 18
      },
      {
      id: 3,  
      name: "Carnitas",
      description: "Pierna de puerco frita un su grasa dentro de tortilla de harina o de maiz. Se acompana con salsa, cilantro y cebolla sin olvidar el harto limon", 
      img:"./images/tacoscarnitas.jpg",
      price: 18
      },
      {
      id: 4, 
      name: "Guisado de Puerco",
      description: "Clasico guisado de puerco como hecho en casa; disfrutalo en tortilla de harina o de maiz", 
      img:"./images/guisadopuerco.jpg",
      price: 18
      },
    ]);
  return (
    <div>
    <NavBar/>
    <Card tacos ={tacos}/>
      
    </div>
  );
}

export default App;







/*Counter: {counter}
    <button onClick={()=> setCounter(counter + 1)}>Increase</button>
    <button onClick={()=> setCounter(counter - 1)} disabled = {counter === 0} >Decrease</button>
    <button onClick={()=> setCounter(0)} disabled = {counter === 0} >Reset</button>
    <h1>These are my buttons</h1>*/

    /*{tacos.map((taco) => {
          console.log(taco);
          return (
          <Card tacos = {taco.name}
          />
          );
        })}*/
/*This is a commit */