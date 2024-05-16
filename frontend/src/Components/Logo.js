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
            <img className="logo-image" onClick={handleClick} src={logo} alt={name}/>
        </div>
    )
}

export default Logo;