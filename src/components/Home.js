import React from 'react'
import boombox from '../assets/boombox.mp4'
// import homepage from './homepage.css'
import Header from './header';
import Contact from './Contact'; 

const Home = () => {
    return (
        <div className='main'>
            <video src={boombox} autoPlay loop muted ></video>
            <Header />
            <div className='logo_1'>
                <h1>Connectify</h1>
            </div>

    <main>
            <div id='shades'>
                    <h2>Bienvenue</h2>
                    <p id='par'>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
            </div>

        <section id='Group'>
            <div id='background-1'></div>
                <div id='green-screen'>
                    <h3 id='h3' className='yellow'>Actualité</h3>
                    <p id='p2'>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
                </div>
        </section>
        
        <section id='team'>
                <div id='blue-screen'>
                    <h3 id='h4' className='yellow'>Qui sommes nous ?</h3>
                    <p id='p3'>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier. Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
                </div>
            <div id='background-2'></div>
        </section>

        <Contact />
    </main>
        </div>
    )
}

export default Home
