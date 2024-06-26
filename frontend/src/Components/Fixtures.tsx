import React, { useState, useEffect } from 'react'
import { format, toZonedTime, fromZonedTime } from 'date-fns-tz';
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
    const [loaded, setLoaded] = useState(false);

    const convertTime = (time: string | undefined): string => {
        const ukTime = 'Europe/London';
        const centralTime = 'America/Chicago';
        const currentDate = new Date().toISOString().split('T')[0];
        const ukDateTime = `${currentDate}T${time}:00`;
        const ukDate = fromZonedTime(ukDateTime, ukTime);
        const centralDate = toZonedTime(ukDate, centralTime);
        const convertedTime = format(centralDate, 'HH:mm', { timeZone: centralTime });
      
        return militaryTimeConvert(convertedTime);
      };

    const militaryTimeConvert = (time : string): string => {
        const [hours, minutes] = time.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;
        const formattedHours = hours12.toString();
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    }

    async function getFixtures() {
        const data = await Api("fixtures?name=" + team);
        if (data !== undefined){
            const premierLeagueFixtures = data.filter((fixture: Fixture) => fixture.competition.trim() === "Premier League");
            setFixtures(premierLeagueFixtures.slice(0, 3));
        }
        setLoaded(true);
    }
  
    useEffect (() => {
      getFixtures();
    }, ([]))

    return (
        <div className='matches-box'>
            <div className='stat-title'>{name} Fixtures</div>
            <div className='fixture-boxes'>
                {fixtures.length > 0 ? 
                
                fixtures.map((fixture, index) => (
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
                                {convertTime(fixture.time)}
                            </div>
                            <div className='away-team'>
                                <img className='logo' src={getLogoByTag(fixture.awayTeam)}></img>
                            </div>
                        </div>
                    </div>
                ))
                :
                    <div className="loading-box">
                        {loaded === true ?
                            <span>No Matches Found</span>
                            :
                            <span>Loading</span>
                        } 
                    </div>
                }
            </div>
        </div>
    );
}

export default Fixtures