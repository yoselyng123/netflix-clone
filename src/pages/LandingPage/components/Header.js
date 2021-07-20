import React from 'react';
import './Header.css';
import LanguageSelector from './LanguageSelector';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <img
                className='header__img'
                src='https://i.ibb.co/r5krrdz/logo.png'
                alt=''
            />
            <div className='header__right'>
                <LanguageSelector />
                <Link to='/login'>
                    <button className='header__btn'>Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
