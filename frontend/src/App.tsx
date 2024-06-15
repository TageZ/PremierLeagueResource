import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Team from './Pages/Team'
import Loading from './Pages/Loading'
import Api from './Utils/Api'

export interface TeamInfo{
  name: string;
  logo: string;
  sky_tag: string;
  bbc_tag: string;
  alt_name: string;
}

function App() {
  const [teams, setTeams] = useState<TeamInfo[]>([]);

  async function getTeams() {
    const data = await Api("teams");
    setTeams(data);
}

  useEffect (() => {
    getTeams()
  }, ([]))

  return (
    teams ? (
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