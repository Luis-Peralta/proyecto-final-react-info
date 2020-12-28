import React from 'react'
import logo from '../img/logo.jpg'

const Header = () => {
    return (
        <header className='center'>            
            <img src={logo} alt='logo' />
            <h3 className="titulo">PERSONAJES DE BREAKING BAD</h3>            
        </header>
    )
}

export default Header
