import ResultsTable from '../components/ResultsTable';
import algorithm from '../helpers/algorithm';
import arrayToString from '../helpers/arrayToString';
import { useState, useEffect } from 'react';

function Results(props) {

    const [users, setUsers] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [body, setBody] = useState(null);
    const headers = ["Name", "Email", "Description", "Clubs", "Gender", "Number of Blockmates", "Concentration", "Cleanliness", "Sleep Time", "Hobbies", "Room Loudness", "Looking for Group?", "Dorm", "Type of Person"];

    useEffect(() => {

        const filteredUser = props.users.filter((user) => (user.uid === props.currentUser.uid))[0];
        setCurrentUser(filteredUser);
        let filteredUsers;
        if (currentUser) {
            filteredUsers = algorithm(currentUser, props.users);
        } else {
            filteredUsers = props.users;
        }
        setUsers(filteredUsers);
        const filteredBody = filteredUsers.map((user) => ([user.name, user.email, user.description, arrayToString(user.clubs), user.gender, user.numBlockmates, user.intendedConcentrations, user.cleanlinessLevel, user.sleepTime, arrayToString(user.hobbies), user.roomLoudness, user.lookingForGroup, user.dorm, user.typeOfPerson]));
        setBody(filteredBody);

    }, [props.users, props.currentUser]);

    if (body) {
        return (
            <div className="Results">
                <h1>Results</h1>
                <ResultsTable header={headers} body={body} />
            </div>
        );
    } else {
        return (
            <div className="Results">
                <h1>Results Loading...</h1>
            </div>
        );
    }
}

export default Results;