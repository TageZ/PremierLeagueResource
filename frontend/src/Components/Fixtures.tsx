import React, { useState, useEffect } from 'react'
import Api from '../Utils/Api';
import '../Styling/Fixtures.scss'
import { TeamInfo } from '../App';

export interface FixtureProps{
    teams: TeamInfo[];
    team: string;
    name: string;
}

export interface Fixture{
    date: string;
    competition: string;
    homeTeam: string;
    awayTeam: string;
    time?: string;
    score?: string;
}

function Fixtures({teams, team, name}: FixtureProps){

    function getLogoByTag(tag: string) {
        const team = teams.find(team => team.alt_name === tag);
        return team ? team.logo : '';
    }

    const [fixtures, setFixtures] = useState<Fixture[]>([]);

    async function getFixtures() {
        const data = await Api("fixtures?name=" + team);
        if (data != undefined){
            setFixtures(data.slice(0,3));
        }
    }
  
    useEffect (() => {
      getFixtures();
    }, ([]))

    return (
        <div className='matches-box'>
            <div className='stat-title'>{name} Fixtures</div>
            <div className='fixture-boxes'>
                {fixtures.map((fixture, index) => (
                    <div className='fixture-box' key={index}>
                        <div className='fixture-header'>
                            <div className='date'>
                                {fixture.date}
                            </div>
                            <div className='competition'>
                                {fixture.competition}
                            </div>
                        </div>
                        <div className='fixture-info'>
                            <div className='home-team'>
                                <img className='logo'src={getLogoByTag(fixture.homeTeam)}></img>
                            </div>
                            <div className='time'>
                                {fixture.time}
                            </div>
                            <div className='away-team'>
                                <img className='logo' src={getLogoByTag(fixture.awayTeam)}></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fixtures