import React, {useState, useEffect} from 'react'

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
    
    <div className="logos">
    <h1>Team Logos</h1>
      {(typeof data.name === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.name.map((name, i) => (
          <div className="logo" key={i}>
            <img 
              className="hover-zoom" 
              src={name} 
              alt="club logo" 
              width='200' 
              height='200'>
            </img>
          </div>
        ))
      )}
    </div>
  )
}

export default App