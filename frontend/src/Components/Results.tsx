import React, { useState, useEffect } from 'react'
import Api from '../Utils/Api';
import '../Styling/Fixtures.scss'
import { TeamInfo } from '../App';
import { Fixture, FixtureProps } from './Fixtures';

function Results({teams, team, name}: FixtureProps){

    function getLogoByTag(tag: string) {
        const team = teams.find(team => team.alt_name === tag);
        return team ? team.logo : '';
    }

    const [results, setResults] = useState<Fixture[]>([]);

    async function getResults() {
        const data = await Api("results?name=" + team);
        if (data != undefined){
            setResults(data.slice(0,3));
        }
    }
  
    useEffect (() => {
      getResults();
    }, ([]))

    return (
        <div className='matches-box'>
            <div className='stat-title'>{name} Results</div>
            <div className='fixture-boxes'>
                {results.map((fixture, index) => (
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
                            <div className='score'>
                                {fixture.score ? (fixture.score.replace(/-/g, ' - ')) : ''}
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

export default Results