import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Team from './Pages/Team.js'
import Loading from './Pages/Loading.tsx'

function App() {
  const [teams, setTeams] = useState([{}])

  async function getTeams() {
      try {
          const response = await fetch("http://127.0.0.1:5000/teams", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
          });

          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }

          const result = await response.json();
          setTeams(result);
      } catch (error) {
          //Error
          console.log("Error getting teams");
      }
  }

  useEffect (() => {
    getTeams()
  }, ([]))

  return (
    teams.length > 1 ? (
      <BrowserRouter data-testid="browser-router">
        <Routes>
          <Route path="/" element={<Home teams={teams}/>} />
          {teams.map((team, i) => (
            <Route key={i} path={`/${team.bbc_tag}`} element={<Team teams={teams} stat_tag={team.bbc_tag} match_tag={team.sky_tag} logo={team.logo} name={team.name}/>} />
          ))}
        </Routes>
      </BrowserRouter>
    ) : (
      <Loading />
    )
  );
}

export default App