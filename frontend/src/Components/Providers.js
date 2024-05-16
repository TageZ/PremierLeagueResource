import React, { useState, useEffect } from 'react'
import Api from '../Utils/Api';
import '../Styling/Statbox.css'

function Providers({team, name}){

    const [providers, setProviders] = useState([{}]);

    async function getProviders() {
        const data = await Api("assisters?name=" + team);
        setProviders(data.slice(0,5));
    }
  
    useEffect (() => {
      getProviders();
    }, ([]))

    return (
        <div className='stat-box'>
            <div className='stat-title'>{name} Top Assisters</div>
            <div className='player-boxes'>
                {providers.map((provider, index) => (
                    <div className='player-box' key={index}>
                        <div className='player-name'>
                            {provider.Name}
                        </div>
                        <div className='player-stat'>
                            {provider.Assists}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Providers