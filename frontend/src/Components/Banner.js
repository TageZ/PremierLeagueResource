import React from 'react'
import '../Styling/Banner.css'
import LeagueScorers from './LeagueScorers'
import LeagueProviders from './LeagueProviders'

function Banner(){

    return (
        <div className='banner'>
            <div className='title-container'>
                Premier League Resource
            </div>
            <div className='banner-content'>
                <div className='pl-logo-container'>
                    <img className="pl-logo" src={process.env.PUBLIC_URL + '/assets/premier-league.svg'} alt="Premier League Logo">
                    </img>
                </div>
                <div className='banner-side-bar'>
                    <LeagueScorers/>
                </div>
                <div className='banner-side-bar'>
                    <LeagueProviders/>
                </div>
            </div>
        </div>
    )
}

export default Banner