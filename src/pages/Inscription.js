import React from 'react'
import inscrit from './page-inscrit.css';
import { Link } from 'react-router-dom';

function Inscription() {
    return (
        <div>
            <div className='grid'>
                <div className='img'></div>
                
                <div id='screen'>
                    <h1>Inscription</h1>

                <div className='verify'>
                <form className='form'>
                    <div className="column">
                        <div className='names'>
                            <label>Nom :</label>
                            <input type='text' placeholder='Entrez votre nom..' required />
                        </div>
                        <div className='names'>
                            <label>Prénom :</label>
                            <input type='text' placeholder='Entrez votre prénom..' required />
                        </div>
                    </div>

                        <div className='mail'>
                            <label>Email :</label>
                            <input type='text' placeholder='Entrez votre email..' required />
                        </div>

                        <div className="gender-box">
                            <h3>Genre :</h3>
                            <div className="gender-option">
                            <div className="gender">
                                <input type="radio" id="check" name="gender"/>
                                <label for="check-Male">Homme</label>
                            </div>
                            <div className="gender">
                                <input type="radio" id="check" name="gender"/>
                                <label for="check-Female ">Femme</label>
                            </div>
                            </div>
                        </div>

                        <div className='key'>
                            <div className='pass'>
                                <label>Mot de passe :</label>
                                <input type='text' placeholder='Entrez votre mot de passe..' required />
                            </div>
                            <div className='pass'>
                                <label>Vérification mot de passe :</label>
                                <input type='text' placeholder='Entrez votre mot de passe..' required />
                            </div>
                        </div>

                        <button>Valider</button>
                </form>
            </div>
                        <p className='phrase'>Déja inscrit ? <Link to="/Connexion" id='lien'>connecter-vous</Link></p>
                </div>
        </div>
        </div>
    )
}

export default Inscription
