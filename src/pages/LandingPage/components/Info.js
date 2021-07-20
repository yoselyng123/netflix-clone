import React from 'react'
import Form_landing from './Form_landing';
import './Info.css';


function Info() {
    return (
        <div className='info'>
            <div className="info__text">
                <h1 className='info__title'>Unlimited movies, TV shows, and more.</h1>
                <p className='info__sub-title'>Watch anywhere. Cancel anytime.</p>
            </div>
            <Form_landing/>
            
        </div>
    )
}

export default Info
