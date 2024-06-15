import React from 'react'
//Components
import Logo from '../Components/Logo';
import Banner from '../Components/Banner';
//Styling
import '../Styling/Home.scss'
import { TeamInfo } from '../App';

interface HomeProps{
    teams: TeamInfo[];
}

function Home({teams}: HomeProps){

    return (
        <div className='sections'>
            <Banner />

            <div className="logos">
                {(teams.map((team, i) => (
                    <Logo name={team.bbc_tag} logo={team.logo} index={i}/>
                )))}
            </div>
        </div >
    )
}

export default Home
