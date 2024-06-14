import React from 'react'
import Banner from '../Components/Banner.tsx';
import '../Styling/Loading.scss'

function Loading(){
    
    return (
        <div className='loading-page'>
            <Banner/>
            <h1 className='loading-text'>Loading...</h1>
        </div>
    )
}

export default Loading;