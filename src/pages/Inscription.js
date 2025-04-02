import React, { useState }from 'react'
import inscrit from './page-inscrit.css';
import { Link , useNavigate } from 'react-router-dom';
import {app} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Firestore functions to save data
import { auth, db } from '../firebase'; // Import auth and db from firebase.js

function Inscription() {
        // State variables for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')

    // Validate form
    if (password !== confirmPassword) {
        setError('Les mots de passe ne correspondent pas.');
        return; //
    }

    if (!gender) {
        setError('Veuillez sélectionner un genre.');
        return;
    }

    try {
        // Create user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
        lastName,
        firstName,
        email,
        gender,
        createdAt: new Date(),
    });

        console.log('Account created and data saved to Firestore');
        navigate('/profil'); // Redirect to profile page after successful registration
    } catch (err) {
        console.error(err);
        setError('Erreur lors de l’inscription : ' + err.message);
    }
};

    return (
        <div>
            <div className='grid'>
                <div className='img'></div>
                
                <div id='screen'>
                    <h1>Inscription</h1>

                <div className='verify'>
                {error && <p className="error">{error}</p>}
                <form className='form'  onSubmit={handleSubmit}>
                    <div className="column">
                        <div className='names'>
                            <label>Nom :</label>
                            <input type='text' placeholder='Entrez votre nom..' value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required />
                        </div>
                        <div className='names'>
                            <label>Prénom :</label>
                            <input type='text' placeholder='Entrez votre prénom..' value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required />
                        </div>
                    </div>

                        <div className='mail'>
                            <label>Email :</label>
                            <input type='text' placeholder='Entrez votre email..' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="gender-box">
                            <h3>Genre :</h3>
                            <div className="gender-option">
                            <div className="gender">
                                <input type="radio" id="check" name="gender" value="Homme"
                        onChange={(e) => setGender(e.target.value)}/>
                                <label htmlFor="check-Male">Homme</label>
                            </div>
                            <div className="gender">
                                <input type="radio" id="check" name="gender" value="Femme"
                        onChange={(e) => setGender(e.target.value)}/>
                                <label htmlFor="check-Female ">Femme</label>
                            </div>
                            </div>
                        </div>

                        <div className='key'>
                            <div className='pass'>
                                <label htmlFor='password'>Mot de passe :</label>
                                <input type='text' placeholder='Entrez votre mot de passe..' value={password}
                    onChange={(e) => setPassword(e.target.value)}required />
                            </div>
                            <div className='pass'>
                                <label htmlFor='confirm-password'>Vérification mot de passe :</label>
                                <input type='text' placeholder='Entrez votre mot de passe..' value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                        </div>

                        <button type='submit' className='valid'>Valider</button>
                </form>
            </div>
                        <p className='phrase'>Déja inscrit ? <Link to="/Connexion" id='lien'>connecter-vous</Link></p>
                </div>
        </div>
        </div>
    )
}

export default Inscription
