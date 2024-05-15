import React, { useState, useEffect } from 'react'
import NavBar from '../Components/Navbar'
import '../Styling/Team.css'

function Team({team, logo}){

    return (
        <div className='team-page'>
            <NavBar title={"Premier League Resource"}/>
            
            <div className='team-page-body'>
                <div className="logo">
                    <img className="club-logo" src={logo} />
                </div>
            </div>
        </div>
    )
}

export default Team