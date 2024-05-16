import React, { useState, useEffect } from 'react'
import '../Styling/Button.css'

function Button({view, setView}){

    const handleClick = (selectedView, event) => {
        document.querySelectorAll('.view-button').forEach(button => {
            button.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        setView(selectedView);
    };

    return (
        <div className='view-buttons'>
            <button className={`view-button ${view === 'fixtures' ? 'active' : ''}`} id='fixturesButton' onClick={(e) => handleClick('fixtures', e)}>Fixtures</button>
            <button className={`view-button ${view === 'results' ? 'active' : ''}`} id='resultsButton' onClick={(e) => handleClick('results', e)}>Results</button>
        </div>
    )
}

export default Button