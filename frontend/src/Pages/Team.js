import React, { useState, useEffect } from 'react'
import NavBar from '../Components/Navbar'
import '../Styling/Team.css'
import Scorers from '../Components/Scorers'
import Providers from '../Components/Providers'
import Fixtures from '../Components/Fixtures'
import Results from '../Components/Results'
import Button from '../Components/Button'

function Team({teams, team, logo, name}){

    const [view, setView] = useState('fixtures');

    return (
        <div className='team-page'>
            <NavBar title={"Premier League Resource"}/>
            
            <div className='team-page-body'>
                <div className="logo-container">
                    <img className="club-logo" src={logo} />
                </div>
                <div className='team-info'>
                    <div className='fixtures'>
                        <Button view={view} setView={setView}/>
                        {view == 'fixtures' ? 
                            (<Fixtures teams={teams} team={team} name={name}/>)
                        :
                            (<Results teams={teams} team={team} name={name}/>)
                        }
                    </div>
                    <div className='stats'>
                        <Scorers team={team} name={name}/>
                        <Providers team={team} name={name}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team