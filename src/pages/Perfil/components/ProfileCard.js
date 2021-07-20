import React from 'react';
import './ProfileCard.css';

function ProfileCard({ profile_name, img_src }) {
    return (
        <div className='profileCard'>
            <a href='/'>
                <div
                    className='profile__img'
                    style={{
                        height: '10rem',
                        width: '10rem',
                        background: `url(${img_src})`,
                        backgroundSize: '100%',
                        borderRadius: '0.3rem',
                        backgroundRepeat: 'no-repeat',
                        boxSizing: 'border-box',
                    }}
                >
                    <div className='profile__img__wrapper'></div>
                </div>
                <p className='profile__name'>{profile_name}</p>
            </a>
        </div>
    );
}

export default ProfileCard;
