import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../Styling/Logo.css'

function Logo({name, logo, i, setTeam}){

    const navigate = useNavigate();

    function handleClick(){
        setTeam(name)
        navigate("/" + name)
    }

    return (
        <div className="logo" key={i}>
            <img
            onClick={handleClick}
            className="hover-zoom"
            src={logo}
            alt="club logo"
            width='80'
            height='80'>
            </img>
        </div>
    )
}

export default Logo;