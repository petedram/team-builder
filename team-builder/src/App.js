import React, { useState } from 'react';
import './App.css';
import Team from './components/Team';
import Form from './components/Form';


function App() {

  const [teams, setTeam] = useState([
    {
      id: 1,
      name: "John",
      email: 'john@company.com',
      role: 'CEO'
    },
    {
      id: 2,
      name: "Pete",
      email: 'Pete@company.com',
      role: 'Product Manager'
    }

  ]);

  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    };

    const newTeamCollection = [...teams, newTeam];

    setTeam(newTeamCollection);
  };

  return (
    <div className="App">
      <h1>Team</h1>
      <Form addNewTeam={addNewTeam} />
     <Team team={teams} />
    </div>
  );
}

export default App;

