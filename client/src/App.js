import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {

    fetch('/teams').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

  }, [])

  return (
    <div className='sections'>
      <div className='banner'>
        <span className='app-title'>
          Premier League Resource
        </span>
        <div className='pl-logo-container'>
          <img
            className="pl-logo"
            src={process.env.PUBLIC_URL + '/premier-league.svg'}
            alt="Premier League Logo"
            width='600'
            height='600'
          >
          </img>
        </div>
      </div>


      <div className="logos">
        {(typeof data.name === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.name.map((name, i) => (
            <div className="logo" key={i}>
              <img
                className="hover-zoom"
                src={name}
                alt="club logo"
                width='80'
                height='80'>
              </img>
            </div>
          ))
        )}
      </div>
    </div >
  )
}

export default App