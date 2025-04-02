import React from 'react'
import Media from '../pages/media.css'
import hexatar_230720ry32sx from '../assets/hexatar_230720ry32sx.png';

function profil() {
    return (
        <div>
            <div className='log-in'>
                <div id='crop'>
                <div className='image'></div>
                </div>
                <div className='profile'>
                    <img  src={hexatar_230720ry32sx} alt="pic" className='pic'/>
                    <div className='sur_name'>
                        <h4 className='na'>Nom</h4>
                        <h4 className='na'>Prénom</h4>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default profil
