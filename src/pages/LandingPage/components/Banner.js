import React from 'react'
import './Banner.css';

function Banner({title, text, image, position}) {
    
    if(position== "right"){

        return (
            <div className='banner'>
                <div className="banner__info">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <img src={image} alt="" />
            </div>
        )

    }else{
        return (
            <div className='banner banner__left'>
                <div className="banner__info">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <img src={image} alt="" />
            </div>
        )
    }
    
    
}

export default Banner
