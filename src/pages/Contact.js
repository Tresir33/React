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
                        <input type="view" id="email" name="email" placeholder="votre adresse e-mail.." />

                    <label for="sujet">Sujet</label>
                        <input type="view" id="sujet" name="sujet" placeholder="remplir.." />

                    <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="write your review.." ></textarea>

                    <input type="submit" value="Valider" />

                </form>
            </div>
            </div>
        </section>
        </div>
    );
}

export default Contact 

