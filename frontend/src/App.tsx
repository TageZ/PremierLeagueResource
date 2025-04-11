import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Team from './Pages/Team'
import Loading from './Pages/Loading'
import { Api } from './Utils/Api'
import teams from './teams.json'

export interface TeamInfo{
  name: string;
  tag: string;
  id: number;
  logo: string;
}

function App() {

  return (
    teams ? (
      <BrowserRouter data-testid="browser-router">
        <Routes>
          <Route path="/" element={<Home teams={teams}/>} />
          {teams.map((team, i) => (
            <Route key={i} path={`/${team.tag}`} element={<Team teams={teams} stat_tag={team.tag} match_tag={team.tag} logo={team.logo} name={team.name}/>} />
          ))}
        </Routes>
      </BrowserRouter>
    ) : (
      <Loading />
    )
  );
}

export default App