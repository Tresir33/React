import React from 'react'
import connect from './connect.css';
// import Header from './header';
function connexion() {
    return (
        <div className='Rap'>
            {/* <Header /> */}
            <div className='grid'>
            <div className='wraps'>
                <div className='jpg'></div>
            </div>
                <div id='backboard'>
                    <h1>Connexion</h1>
                <div className='context'>
                <form className='connect'>
                    <label for="email">Email :</label>
                        <input type="text" id="email" name="email" placeholder="votre adresse e-mail.." />

                    <label for="password">Mot de passe :</label>
                        <input type="text" id="password" name="sujet" placeholder="remplir.." />

                    <input type="submit" value="se connecter" />

                </form>
            </div>
            <p className='phrase'>Pas de compte? <a href='Inscription' id='lien'>Incrivez-vous</a></p>
                </div>
        </div>
            </div>
    )
}

export default connexion
