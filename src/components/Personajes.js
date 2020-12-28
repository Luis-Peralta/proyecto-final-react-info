import React from 'react'
import UnPersonaje from './UnPersonaje'
import Loading from './Loading'

const Personajes = ({items, isLoading}) => {
    return isLoading ? (<Loading/>) 
        : (
        <section className="tarjetas">
            {items.map((item) =>(
                <UnPersonaje key={item.char_id} item={item}></UnPersonaje>
            ))}
        </section>
        )
}

export default Personajes
