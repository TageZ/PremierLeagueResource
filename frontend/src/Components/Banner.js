import React from 'react'
import '../Styling/Banner.css'

function Banner(){

    return (
        <div className='banner'>
            <div className='title-container'>
                Premier League Resource
            </div>
            <div className='pl-logo-container'>
                <img
                className="pl-logo"
                src={process.env.PUBLIC_URL + '/assets/premier-league.svg'}
                alt="Premier League Logo"
                width='600'
                height='600'
                >
                </img>
            </div>
        </div>
    )
}

export default Banner