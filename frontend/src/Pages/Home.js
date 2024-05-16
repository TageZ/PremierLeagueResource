import React, { useState, useEffect } from 'react'
//Components
import Logo from '../Components/Logo';
import Banner from '../Components/Banner';
//Styling
import '../Styling/Home.css'

function Home({teams, setTeam}){

    return (
        <div className='sections'>
            <Banner />

            <div className="logos">
                {(teams.map((team, i) => (
                    <Logo teams={teams} name={team.tag} logo={team.logo} key={i} setTeam={setTeam}/>
                )))}
            </div>
        </div >
    )
}

export default Home
