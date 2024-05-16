import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../Styling/Logo.css'

function Logo({name, logo, index}){

    const navigate = useNavigate();

    function handleClick(){
        navigate("/" + name)
    }

    return (
        <div className="logo" key={index}>
            <img className="logo-image" onClick={handleClick} src={logo} alt={name}/>
        </div>
    )
}

export default Logo;