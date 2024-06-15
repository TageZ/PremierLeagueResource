import React, { useState, useEffect } from 'react'
import Api from '../Utils/Api';
import '../Styling/Sidebar.scss'

export interface Provider{
    Name: string;
    Assists: number;
}

function LeagueProviders(){

    const [providers, setProviders] = useState<Provider[]>([]);

    async function getProviders() {
        const data = await Api("assisters?name=");
        if (data != undefined){
            setProviders(data.slice(0,5));
        }
    }
  
    useEffect (() => {
      getProviders();
    }, ([]))

    return (
        <div className='side-bar-content'>
            <div className='side-bar-title'>Premier League Top Assisters</div>
            <div className='side-bar-boxes'>
                {providers.map((provider, index) => (
                    <div className='side-bar-box' key={index}>
                        <div className='side-bar-name'>
                            {provider.Name}
                        </div>
                        <div className='side-bar-stat'>
                            {provider.Assists}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeagueProviders