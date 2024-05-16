import React, { useState, useEffect } from 'react'
import NavBar from '../Components/Navbar'
import '../Styling/Team.css'
import Scorers from '../Components/Scorers'
import Providers from '../Components/Providers'

function Team({team, logo, name}){

    return (
        <div className='team-page'>
            <NavBar title={"Premier League Resource"}/>
            
            <div className='team-page-body'>
                <div className="logo-container">
                    <img className="club-logo" src={logo} />
                </div>
                <div className='stats'>
                    <Scorers team={team} name={name}/>
                    <Providers team={team} name={name}/>
                </div>
            </div>
        </div>
    )
}

export default Team