import React, { useState } from 'react'
import NavBar from '../Components/Navbar'
import '../Styling/Team.scss'
import Scorers from '../Components/Scorers'
import Providers from '../Components/Providers'
import Fixtures from '../Components/Fixtures'
import Results from '../Components/Results'
import Button from '../Components/Button'
import { TeamInfo } from '../App'

interface TeamProps{
    teams: TeamInfo[];
    stat_tag: string;
    match_tag: string;
    logo: string;
    name: string;
}

function Team({teams, stat_tag, match_tag, logo, name}: TeamProps){

    const [view, setView] = useState('fixtures');

    return (
        <div className='team-page'>
            <NavBar title={"Premier League Resource"}/>
            
            <div className='team-page-body'>
                <div className="logo-container">
                    <img className="club-logo" src={logo} alt="team-logo"/>
                </div>
                <div className='team-info'>
                    <div className='fixtures'>
                        <Button view={view} setView={setView}/>
                        {view === 'fixtures' ? 
                            (<Fixtures teams={teams} team={match_tag} name={name}/>)
                        :
                            (<Results teams={teams} team={match_tag} name={name}/>)
                        }
                    </div>
                    <div className='stats'>
                        <Scorers team={stat_tag} name={name}/>
                        <Providers team={stat_tag} name={name}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team