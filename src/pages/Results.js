import ResultsTable from '../components/ResultsTable';
import algorithm from '../helpers/algorithm';
import React from 'react';
import arrayToString from '../helpers/arrayToString';
import UserCard from '../components/UserCard';

function Results(props) {
    const headers = ["Name", "Email", "Description", "Clubs", "Gender", "Number of Blockmates", "Concentration", "Cleanliness", "Sleep Time", "Hobbies", "Room Loudness", "Looking for Group?", "Dorm", "Type of Person"];
    const currentUser = props.users.filter((user) => (user.uid === props.currentUser.uid))[0];

    // const users = algorithm(currentUser.preferences, props.users);
    
    const users = [{
        name: "John",
        email: "kenaa@example.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius",
        clubs: ['Test', 'Test 2'],
        gender: 'Male',
        numblockmates: 10,
        intendedConcentrations: ['CompSci'],
        cleanlinessLevel: 10,
        sleepTime: 9,
        hobbies: ['Test', 'Test 2'],
        roomLoudness: 10,
        lookingForGroup: true,
        dorm: 'Thayer',
        typeOfPerson: 'Stay in'
    }]}

    const body = users.map((user) => ([user.name, user.email, user.description, arrayToString(user.clubs), user.gender, user.numBlockmates, arrayToString(user.intendedConcentrations), user.cleanlinessLevel, user.sleepTime, arrayToString(user.hobbies), user.roomLoudness, user.lookingForGroup, user.dorm, user.typeOfPerson]));

    return (
        <div className="Results">
            <h1>Results</h1>
            <UserCard name={ body[0][0] } email={ body[0][1] } description={ body[0][2] } clubs={body[0][3]} numBlockmates={ body[0][5] } intendedConcentrations={ body[0][6] } cleanlinessLevel={ body[0][7] } sleepTime={ body[0][8] } hobbies={ body[0][9] } roomLoudness={ body[0][10] } lookingForGroup={ body[0][11] } dorm={ body[0][12] } typeOfPerson={ body[0][13] }/>
            {/* <UserCard name={ body[1][0] } email={ body[1][1] } description={ body[1][2] } clubs={body[1][3]} numBlockmates={ body[1][5] } intendedConcentrations={ body[1][6] } cleanlinessLevel={ body[1][7] } sleepTime={ body[1][8] } hobbies={ body[1][9] } roomLoudness={ body[1][10] } lookingForGroup={ body[1][11] } dorm={ body[1][12] } typeOfPerson={ body[1][13] }/>
            <UserCard name={ body[2][0] } email={ body[2][1] } description={ body[2][2] } clubs={body[2][3]} numBlockmates={ body[2][5] } intendedConcentrations={ body[2][6] } cleanlinessLevel={ body[2][7] } sleepTime={ body[2][8] } hobbies={ body[2][9] } roomLoudness={ body[2][10] } lookingForGroup={ body[2][11] } dorm={ body[2][12] } typeOfPerson={ body[2][13] }/>
            <UserCard name={ body[3][0] } email={ body[3][1] } description={ body[3][2] } clubs={body[3][3]} numBlockmates={ body[3][5] } intendedConcentrations={ body[3][6] } cleanlinessLevel={ body[3][7] } sleepTime={ body[3][8] } hobbies={ body[3][9] } roomLoudness={ body[3][10] } lookingForGroup={ body[3][11] } dorm={ body[3][12] } typeOfPerson={ body[3][13] }/>
            <UserCard name={ body[4][0] } email={ body[4][1] } description={ body[4][2] } clubs={body[4][3]} numBlockmates={ body[4][5] } intendedConcentrations={ body[4][6] } cleanlinessLevel={ body[4][7] } sleepTime={ body[4][8] } hobbies={ body[4][9] } roomLoudness={ body[4][10] } lookingForGroup={ body[4][11] } dorm={ body[4][12] } typeOfPerson={ body[4][13] }/> */}

        </div>
    );
}

export default Results;