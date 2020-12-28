import React from 'react'
import UnPersonaje from './UnPersonaje'

const Personajes = ({items, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) 
        : (
        <section className="tarjetas">
            {items.map((item) =>(
                <UnPersonaje key={item.char_id} item={item}></UnPersonaje>
            ))}
        </section>
        )
}

export default Personajes
