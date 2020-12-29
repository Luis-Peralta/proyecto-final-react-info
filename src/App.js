import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Personajes from './components/Personajes'
import Busqueda from './components/Busqueda'
import Footer from './components/Footer'
var num = 2;
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  
  
  const [paginaActual] = useState(1);
  let [numeroDePer, setNumeroDePer] = useState(8);


  useEffect(() =>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

   // Get current posts
   const ultimoPer = paginaActual * numeroDePer;

   const primerPer = ultimoPer - numeroDePer;
   const currentPosts = items.slice(primerPer, ultimoPer);

   // load mas personajes
  
  function loadMas(){
    setNumeroDePer(8 * num)
    num = num + 1; 
    console.log(num)
    if(num >= 9){
      let a = document.getElementById('boton');
      a.style.visibility = "hidden";
    }    
  };
  function restablecer(){
    setNumeroDePer(8)
    num = 2;
    if(num < 9){
      let b = document.getElementById('boton');
      b.style.visibility = "visible";
    } 
  };


  return (
    <div className="container" id="inicio">      
      <Header/>
      <Busqueda getQuery={(q) => setQuery(q)}/>
      <Personajes isLoading={isLoading} items={currentPosts} />
      <button type="button" class="btn btn-success btn-lg boton-cargar" onClick={loadMas} id="boton">Cargar mas</button>
      <a href="#inicio"><button type="button" class="btn btn-outline-success btn-lg boton-cargar" onClick={restablecer}>
          Restablecer</button></a>
      <Footer/>
    </div>
  );
}

export default App;
