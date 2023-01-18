import ResultsTable from '../components/ResultsTable';
import algorithm from '../helpers/algorithm';
import React from 'react'

function Results(props) {
    const headers = ["Name", "Email", "Description", "Clubs", "Gender", "Number of Blockmates", "Concentration", "Cleanliness", "Sleep Time", "Hobbies", "Room Loudness", "Looking for Group?", "Dorm", "Type of Person"];
    const currentUser = props.users.filter((user) => (user.uid === props.currentUser.uid))[0];
    const users = algorithm(currentUser.preferences, props.users);
    const body = users.map((user) => ([user.name, user.email, user.description, user.clubs, user.gender, user.numOfBlockmates, user.concentration, user.cleanliness, user.sleeptime, user.hobbies, user.roomloudness, user.lookingforgroup, user.dorm, user.TypeofPerson]));

    return (
        <div className="Results">
            <h1>Results</h1>
            <ResultsTable header = {headers} body = {body}/>
        </div>
    );
}

export default Results;