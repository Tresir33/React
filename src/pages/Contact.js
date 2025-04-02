import React from 'react';

    function Contact() {
    return (
        <div className='main'>
        <section className='pack'>
            <div className='WhatUp'></div>
            <div id='contact'>
                <h5 id='h5' className='yellow'>Nous Contacter</h5>
            <div className='info'>
                <form className='contact'>
                    <label for="email">Email</label>
                        <input type="view" id="email" name="email" placeholder="votre adresse e-mail.." required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" title="Veuillez entrer un email valide." />

                    <label for="sujet">Sujet</label>
                        <input type="view" id="sujet" name="sujet" placeholder="remplir.." required pattern="^[a-zA-Z0-9\s]+$" title="Le sujet doit contenir uniquement des lettres, des chiffres et des espaces." />

                    <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="write your review.." required pattern="^[\s\S]{10,500}$" title="Le message doit contenir entre 10 et 500 caractères." ></textarea>

                    <input type="submit" value="Valider" />

                </form>
            </div>
            </div>
        </section>
        </div>
    );
}

export default Contact 

