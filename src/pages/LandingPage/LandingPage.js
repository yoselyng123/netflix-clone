import React from 'react';
import './LandingPage.css';
import Header from './components/Header';
import Info from './components/Info';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function LandingPage() {
    return (
        <div className='landingPage'>
            <div className='landingPage__section1'>
                <div className='landingPage__section1__gradient'>
                    <Header />
                    <Info />
                </div>
            </div>
            <Banner
                title='Enjoy on your TV.'
                text='Watch on Smart TVs, Playstation, Xbox, Chomecast, Apple TV, Blu-ray players, and more.'
                image='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
                position='right'
            />
            <Banner
                title='Download your shows to watch offline.'
                text='Save your favorites easily and always have something to watch.'
                image='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            />
            <Banner
                title='Watch everywhere.'
                text='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
                image='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
                position='right'
            />
            <Banner
                title='Create profiles for kids.'
                text='Send kids on adventures with their favorite characters in a space made just for them--free with your membership.'
                image='https://occ-0-1740-1123.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd'
            />
            <FAQ />
            <Footer />
        </div>
    );
}

export default LandingPage;
