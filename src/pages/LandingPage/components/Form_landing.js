import React from 'react';
import './Form_landing.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Form_landing() {
    return (
        <div className='info__form'>
            <p className='info__form-text' >Ready to watch? Enter your email to create or restart your membership.</p>
            <form className='info__form-wrapper'>
                <input className='info__form-email' type="text" placeholder='Email address' />
                <button className='info__form-btn'><span>Get Started</span> <span className='info__form-icon'> <ArrowForwardIosIcon/> </span> </button>
            </form>
        </div>
    )
}

export default Form_landing
