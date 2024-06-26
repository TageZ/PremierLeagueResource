import React, { useState, useEffect } from 'react'
import Api from '../Utils/Api';
import '../Styling/Statbox.scss'
import { Scorer } from './LeagueScorers';

export interface StatProps{
    team: string;
    name: string;
}

function Scorers({team, name}: StatProps){

    const [scorers, setScorers] = useState<Scorer[]>([]);

    async function getScorers() {
        const data = await Api("scorers?name=" + team);
        if (data != undefined){
            setScorers(data.slice(0,5));
        }
    }
  
    useEffect (() => {
      getScorers();
    }, ([]))

    return (
        <div className='stat-box'>
            <div className='stat-title'>{name} Top Scorers</div>
            <div className='player-boxes'>
                {scorers.map((scorer, index) => (
                    <div className='player-box' key={index}>
                        <div className='player-name'>
                            {scorer.Name}
                        </div>
                        <div className='player-stat'>
                            {scorer.Goals}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Scorers