import React, { useState, useEffect } from 'react'
//Components
import Logo from '../Components/Logo.tsx';
import Banner from '../Components/Banner.tsx';
//Styling
import '../Styling/Home.scss'

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
