import React, { useState } from "react";

const Form = ({addNewTeam}) => {

    const [team, setTeam] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = event => {
        setTeam({ ...team, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();

        addNewTeam(team);

        setTeam({ name: '', email: '', role: '' });
    };

    return (
        <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter a name"
            onChange={handleChanges}
            value={team.name}
        />
        <label htmlFor="email">Email</label>
        <input
           id="email"
           name="email"
           placeholder="Add email here"
           onChange={handleChanges}
           value={team.email}
        />     
        <label htmlFor="email">Role</label>
        <input
            id="role"
            type="text"
            name="role"
            placeholder="Enter role"
            onChange={handleChanges}
            value={team.role}
        />
        <button type="submit">Add Team Member</button>
        </form>


        )};

export default Form;
