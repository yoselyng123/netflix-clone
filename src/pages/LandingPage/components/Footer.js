import React from 'react'
import './Footer.css';
import LanguageSelector from './LanguageSelector';

function Footer() {
    
    const links = [
        'FAQ',
        'Help Center',
        'Account',
        'Media Center',
        'Investors Relations',
        'Jobs',
        'Ways to Watch',
        'Terms of Use',
        'Privacy',
        'Cookie Preferences',
        'Corporate Information',
        'Contact Us',
        'Speed Test',
        'Legal Notices',
        'Only on Netflix',
    ]
    
    return (
        <div className='footer'>
            <div className='footer__content'>
                <p className='footer__top'>Questions? Call +1 (408) 469-4467 (USA)</p>

                <ul className='footer__list'>
                    {links.map( (link) => (
                        <li className='footer__list-item' key={link}>
                            <a href="/"> {link} </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <LanguageSelector />
                </div>
                <p className='footer__bottom'>Netflix Venezuela</p>

            </div>
        </div>
    )
}

export default Footer
