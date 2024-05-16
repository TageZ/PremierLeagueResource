import React, { useState, useEffect } from 'react'
import Api from '../Utils/Api';
import '../Styling/Sidebar.css'

function LeagueScorers(){

    const [scorers, setScorers] = useState([{}]);

    async function getScorers() {
        const data = await Api("scorers?name=");
        setScorers(data.slice(0,5));
    }
  
    useEffect (() => {
      getScorers();
    }, ([]))

    return (
        <div className='side-bar-content'>
            <div className='side-bar-title'>Premier League Top Scorers</div>
            <div className='side-bar-boxes'>
                {scorers.map((scorer, index) => (
                    <div className='side-bar-box' key={index}>
                        <div className='side-bar-name'>
                            {scorer.Name}
                        </div>
                        <div className='side-bar-stat'>
                            {scorer.Goals}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeagueScorers