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
    <div>

      {(typeof data.name === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.name.map((name, i) => (
          <p key={i}><img src={name} alt="club logo" width='200' height='200'></img></p>
        ))
      )}

    </div>
  )
}

export default App