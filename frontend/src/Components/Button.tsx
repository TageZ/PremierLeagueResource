import React from 'react'
import '../Styling/Button.scss'

interface ButtonProps{
    view: string;
    setView: (view: string) => void;
}

function Button({view, setView}: ButtonProps){

    const handleClick = (selectedView: string, event: React.MouseEvent<HTMLButtonElement>) => {
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