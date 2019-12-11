import React, { useState } from 'react';
import './App.css';
import Team from './components/Team';

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "John",
      email: 'john@company.com',
      role: 'CEO'
    }
  ]);

  return (
    <div className="App">
      <h1>Team</h1>
    <Team team={team} />
    </div>
  );
}

export default App;

