import React from 'react';
import header from './header.css';
import { Link } from 'react-router-dom';

function Header() {



    return (
                <nav className='nav'>
                        <Link to="/" className='yellow' id='logo'>Connectify</Link>
                    <ul>
                        <li><Link to="/" className='yellow'>Accueil</Link></li>
                        <li><Link to="/connexion">Connexion</Link></li>
                        <button className='btn-1'>
                            <li><Link to="/inscription">Inscription</Link></li>
                            </button>
                    </ul>
                </nav>
    );
}

export default Header;

