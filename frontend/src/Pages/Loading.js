import React from 'react'
import Banner from '../Components/Banner';
import '../Styling/Loading.css'

function Loading(){
    console.log('loading');

    return (
        <div className='loading-page'>
            <Banner/>
            <h1 className='loading-text'>Loading...</h1>
        </div>
    )
}

export default Loading;