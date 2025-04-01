import React from 'react';
import homepage from './homepage.css';

function Header() {
    return (
        <div>
            {/* <div id="standard"> */}
                <nav >
                        <div className='yellow' id='logo'>Connectify</div>
                    <ul>
                        <li><a href="/" className='yellow'>Accueil</a></li>
                        <li><a href="/connexion">Connexion</a></li>
                        <button className='btn-1'>
                            <li><a href="/inscription">Inscription</a></li>
                            </button>
                    </ul>
                </nav>
            {/* </div> */}
        </div>
    );
}

export default Header;

