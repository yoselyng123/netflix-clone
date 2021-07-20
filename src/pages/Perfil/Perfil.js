import React from 'react';
import './Perfil.css';
import ProfileCard from './components/ProfileCard';

function Perfil() {
    const user_profiles = [
        'Profile 1',
        'Profile 2',
        'Profile 3',
        'Profile 4',
        'Profile 5',
    ];

    const src_profiles = [
        'https://occ-0-1567-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFO4h2_Zipe6OODRZ0Ie4xq5MsUKp2k7ce6uto52e4V3trctvyzbI-zEz-xuVpOqtqg9tFJAJICYiAfaZa2v9_hvsqA.png?r=b97',
        'https://occ-0-1567-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc',
        'https://occ-0-1567-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfbUufzrmfRsdANqSictkngrWowz70xmkZl3xIrEQvQ525x2YSCxRxJxuh54gqa6rarNEothuXQYmIjrcZZLSlKGhs_w.png?r=f80',
        'https://occ-0-1567-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFKwVKY9ZRNadZ8Ymse7RRCkteNfvRXmmPmMTFqth-T-TIVxKEy2TYdo6WuF0cVyLn4EClNP6WMWflMhG2t5Gnti7Nw.png?r=f71',
        'https://occ-0-1567-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41',
    ];

    return (
        <div className='perfil'>
            <div className='perfil__header'>
                <img
                    className='header__img'
                    src='https://i.ibb.co/r5krrdz/logo.png'
                    alt='Netflix Logo'
                />
            </div>

            <div className='perfil__container'>
                <h1>Who's watching?</h1>
                <div className='perfil__list-container'>
                    <ul className='perfil__list'>
                        {user_profiles.map((profile_name, index) => (
                            <li
                                className='perfil__list-item'
                                key={profile_name}
                            >
                                <ProfileCard
                                    profile_name={profile_name}
                                    img_src={src_profiles[index]}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <button className='perfil__btn'>Manage Profiles</button>
            </div>
        </div>
    );
}

export default Perfil;
