import algorithm from '../helpers/algorithm';
import React from 'react';
import arrayToString from '../helpers/arrayToString';
import UserCard from '../components/UserCard';
import { Grid, Card } from '@mui/material';
import '../styling/Results.css';
import { bedtimeConverter, typeOfPersonConverter, cleanlinessLevelConverter, roomLoudnessConverter, lookingForGroupConverter } from '../helpers/converters';

function Results(props) {
    const currentUser = props.users.filter((user) => (user.uid === props.currentUser.uid))[0];

    let users;
    if (currentUser) {
        users = algorithm(currentUser, props.users);
    } else {
        users = props.users;
    }

    const body = users.map((user) => ([user.name, user.image, user.email, user.description, arrayToString(user.clubs), user.gender, user.numBlockmates, user.intendedConcentrations, user.cleanlinessLevel, user.sleepTime, arrayToString(user.hobbies), user.roomLoudness, user.lookingForGroup, user.dorm, user.typeOfPerson, user.score]));

    return (
        <div className="Results">
            <h1>Results</h1>
            <h2>
                <span style={{ marginLeft: "5px" }} role="img-results" aria-label="emoji">🧪</span>
                <span>View Your Matches</span>
                <span style={{ marginLeft: "5px" }} role="img-results" aria-label="emoji">👀</span>
            </h2>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className="result-card" style={{ margin: "10px" }}>
                        <UserCard name={<div className="user-name"> {body[0][0]} </div>} image={body[0][1]} email={body[0][2]} description={body[0][3]} clubs={body[0][4]} gender={body[0][5]} numBlockmates={body[0][6]} intendedConcentrations={body[0][7]} cleanlinessLevel={cleanlinessLevelConverter(body[0][8])} sleepTime={bedtimeConverter(body[0][9])} hobbies={body[0][10]} roomLoudness={roomLoudnessConverter(body[0][11])} lookingForGroup={lookingForGroupConverter(body[0][12])} dorm={body[0][13]} typeOfPerson={typeOfPersonConverter(body[0][14])} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className="result-card" style={{ margin: "20px" }}>
                        <UserCard name={<div className="user-name"> {body[1][0]} </div>} image={body[1][1]} email={body[1][2]} description={body[1][3]} clubs={body[1][4]} gender={body[1][5]} numBlockmates={body[1][6]} intendedConcentrations={body[1][7]} cleanlinessLevel={cleanlinessLevelConverter(body[1][8])} sleepTime={bedtimeConverter(body[1][9])} hobbies={body[1][10]} roomLoudness={roomLoudnessConverter(body[1][11])} lookingForGroup={lookingForGroupConverter(body[1][12])} dorm={body[1][13]} typeOfPerson={typeOfPersonConverter(body[1][14])} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className="result-card" style={{ margin: "20px" }}>
                        <UserCard name={<div className="user-name"> {body[2][0]} </div>} image={body[2][1]} email={body[2][2]} description={body[2][3]} clubs={body[2][4]} gender={body[2][5]} numBlockmates={body[2][6]} intendedConcentrations={body[2][7]} cleanlinessLevel={cleanlinessLevelConverter(body[2][8])} sleepTime={bedtimeConverter(body[2][9])} hobbies={body[2][10]} roomLoudness={roomLoudnessConverter(body[2][11])} lookingForGroup={lookingForGroupConverter(body[2][12])} dorm={body[2][13]} typeOfPerson={typeOfPersonConverter(body[2][14])} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className="result-card" style={{ margin: "20px" }}>
                        <UserCard name={<div className="user-name"> {body[3][0]} </div>} image={body[3][1]} email={body[3][2]} description={body[3][3]} clubs={body[3][4]} gender={body[3][5]} numBlockmates={body[3][6]} intendedConcentrations={body[3][7]} cleanlinessLevel={cleanlinessLevelConverter(body[3][8])} sleepTime={bedtimeConverter(body[3][9])} hobbies={body[3][10]} roomLoudness={roomLoudnessConverter(body[3][11])} lookingForGroup={lookingForGroupConverter(body[3][12])} dorm={body[3][13]} typeOfPerson={typeOfPersonConverter(body[3][14])} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Results;