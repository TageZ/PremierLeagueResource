import React, { useState, useEffect } from 'react'
//Components
import Logo from '../Components/Logo';
import Banner from '../Components/Banner';
//Styling
import '../Styling/Home.css'

function Home({teams}){

    console.log(teams);

    return (
        <div className='sections'>
            <Banner />

            <div className="logos">
                {(teams.map((team, i) => (
                    <Logo teams={teams} name={team.bbc_tag} logo={team.logo} key={i}/>
                )))}
            </div>
        </div >
    )
}

export default Home
