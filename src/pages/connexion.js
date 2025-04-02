import React, { useState }from 'react';
import connect from './connect.css';
import { Link , useNavigate } from 'react-router-dom';
import {app} from '../firebase'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'; // Use signInWithEmailAndPassword for login

// import Header from './header';
function Connexion() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Sign in user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('User logged in:', user.uid);
      navigate('/profil'); // Redirect to profile page after successful login
    } catch (err) {
      console.error(err);
      setError('Erreur lors de la connexion : ' + err.message);
    }
  };
    

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
                {error && <p className="error">{error}</p>}
                <form className='connect' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email :</label>
                        <input type="text" id="email" name="email" placeholder="votre adresse e-mail.." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Mot de passe :</label>
                        <input type="text" id="password" name="sujet" placeholder="remplir.."  value={password}
                    onChange={(e) => setPassword(e.target.value)}required/>

                    <button type='submit' className='click'>Se connecter</button>

                </form>
            </div>
            <p className='rappel'>Pas de compte? <Link to='/Inscription' id='lien'>Incrivez-vous</Link></p>
                </div>
        </div>
            </div>
    )
}

export default Connexion
