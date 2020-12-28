import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Personajes from './components/Personajes'
import Busqueda from './components/Busqueda'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() =>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Busqueda getQuery={(q) => setQuery(q)}/>
      <Personajes isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
