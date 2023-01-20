import ResultsTable from '../components/ResultsTable';
import algorithm from '../helpers/algorithm';
import React from 'react';
import arrayToString from '../helpers/arrayToString';

function Results(props) {
    const headers = ["Name", "Email", "Description", "Clubs", "Gender", "Number of Blockmates", "Concentration", "Cleanliness", "Sleep Time", "Hobbies", "Room Loudness", "Looking for Group?", "Dorm", "Type of Person", "Compatibility Score"];
    const currentUser = props.users.filter((user) => (user.uid === props.currentUser.uid))[0];
    
    let users;
    if (currentUser) {
        users = algorithm(currentUser, props.users);
    } else {
        users = props.users;
    }

<<<<<<< HEAD
    const body = users.map((user) => ([user.name, user.image, user.email, user.description, arrayToString(user.clubs), user.gender, user.numBlockmates, user.intendedConcentrations, user.cleanlinessLevel, user.sleepTime, arrayToString(user.hobbies), user.roomLoudness, user.lookingForGroup, user.dorm, user.typeOfPerson, user.score]));
=======
    const body = users.map((user) => ([user.name, user.email, user.description, arrayToString(user.clubs), user.gender, user.numBlockmates, user.intendedConcentrations, user.cleanlinessLevel, user.sleepTime, arrayToString(user.hobbies), user.roomLoudness, user.lookingForGroup, user.dorm, user.typeOfPerson, user.score]));
>>>>>>> main

    return (
        <div className="Results">
            <h1>Results</h1>
<<<<<<< HEAD
            <h2>
                <span style={{marginLeft: "5px"}} role="img-results" aria-label="emoji">🧪</span> 
                <span>View Your Matches</span> 
                <span style={{marginLeft: "5px"}} role="img-results" aria-label="emoji">👀</span>
            </h2>
            <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="result-card" style={{margin: "10px"}}>
                            <UserCard name={ <div className="user-name"> {body[0][0]} </div>} image={ body[0][1] }email={ body[0][2] } description={ body[0][3] } clubs={body[0][4]} gender={ body[0][5] } numBlockmates={ body[0][6] } intendedConcentrations={ body[0][7] } cleanlinessLevel={ body[0][8] } sleepTime={ body[0][9] } hobbies={ body[0][10] } roomLoudness={ body[0][11] } lookingForGroup={ body[0][12] } dorm={ body[0][13] } typeOfPerson={ body[0][14]}/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="result-card" style={{margin: "20px"}}>    
                            <UserCard name={ <div className="user-name"> {body[1][0]} </div>} image={ body[1][1] }email={ body[1][2] } description={ body[1][3] } clubs={body[1][4]} gender={ body[1][5] } numBlockmates={ body[1][6] } intendedConcentrations={ body[1][7] } cleanlinessLevel={ body[1][8] } sleepTime={ body[1][9] } hobbies={ body[1][10] } roomLoudness={ body[1][11] } lookingForGroup={ body[1][12] } dorm={ body[1][13] } typeOfPerson={ body[1][14]}/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="result-card" style={{margin: "20px"}}>
                            <UserCard name={ <div className="user-name"> {body[2][0]} </div>} image={ body[2][1] }email={ body[2][2] } description={ body[2][3] } clubs={body[2][4]} gender={ body[2][5] } numBlockmates={ body[2][6] } intendedConcentrations={ body[2][7] } cleanlinessLevel={ body[2][8] } sleepTime={ body[2][9] } hobbies={ body[2][10] } roomLoudness={ body[2][11] } lookingForGroup={ body[2][12] } dorm={ body[2][13] } typeOfPerson={ body[2][14]}/>            
                        </Card>    
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="result-card" style={{margin: "20px"}}>
                            <UserCard name={ <div className="user-name"> {body[3][0]} </div>} image={ body[3][1] }email={ body[3][2] } description={ body[3][3] } clubs={body[3][4]} gender={ body[3][5] } numBlockmates={ body[3][6] } intendedConcentrations={ body[3][7] } cleanlinessLevel={ body[3][8] } sleepTime={ body[3][9] } hobbies={ body[3][10] } roomLoudness={ body[3][11] } lookingForGroup={ body[3][12] } dorm={ body[3][13] } typeOfPerson={ body[3][14]}/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="result-card" style={{margin: "20px"}}>
                            <UserCard name={ <div className="user-name"> {body[4][0]} </div>} image={ body[4][1] }email={ body[4][2] } description={ body[4][3] } clubs={body[4][4]} gender={ body[4][5] } numBlockmates={ body[4][6] } intendedConcentrations={ body[4][7] } cleanlinessLevel={ body[4][8] } sleepTime={ body[4][9] } hobbies={ body[4][10] } roomLoudness={ body[4][11] } lookingForGroup={ body[4][12] } dorm={ body[4][13] } typeOfPerson={ body[4][14]}/>
                        </Card>
                    </Grid>
            </Grid>
=======
            <ResultsTable header = {headers} body = {body}/>
>>>>>>> main
        </div>
    );
}

export default Results;