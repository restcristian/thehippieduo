import React from 'react'
import Text from '../Text';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className = "nav">
            <ul className = "nav__list">
                <li className = "nav__list-item"><a href=""><Text fontWeight="bold">Save the Date</Text></a></li>
                <li className = "nav__list-item"><a href=""><Text fontWeight="bold">Regalos</Text></a></li>
                <li className = "nav__list-item"><a href=""><Text fontWeight="bold">Q&A</Text></a></li>
                <li className = "nav__list-item"><a href=""><Text fontWeight="bold">Galería</Text></a></li>
                <li className = "nav__list-item"><a href=""><Text fontWeight="bold">Ubicación</Text></a></li>
                <li className = "nav__list-item"></li>
            </ul>
        </nav>
    )
}

export default Nav
