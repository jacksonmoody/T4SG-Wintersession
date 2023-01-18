import ResultsTable from '../components/ResultsTable';
import React from 'react';
import "../styling/Profile.css";
import Attribute from "../components/Attribute";
import arrayToString from "../helpers/arrayToString";

/*
function Profile(props) {
    const headers = ["Name", "Email", "Description"];
    let body = props.users.filter((user) => (user.uid === props.currentUser.uid));
    body = body.map((user) => ([user.name, user.email, user.description]));

    return (
        <div className="Profile">
            <h1>Profile</h1>
            <ResultsTable header = {headers} body = {body}/>
        </div>
    );
} */


function Profile(props) {
    const currentUser = props.users.filter((user) => (user.uid === props.currentUser.uid))[0];
    let status = "Looking for Blockmates"

    if (currentUser.lookingForGroup) {
        status = "Looking for Group";
    };

    console.log(currentUser.clubs);
    
    return ( <div className="Profile">
                <div className="userinfo">
                    <img alt="Profile" id="profilePicture" src = { currentUser.image }></img>
                    <h1 id="name"> { currentUser.name }</h1>
                    <h2 id="concentration"> { arrayToString(currentUser.concentrations)} </h2>
                    <Attribute name = "Number of Current Blockmates" value = { currentUser.numberOfBlockmates} />
                    <Attribute name = "Status" value = { status } />
                </div>
                <div className="userinfo">
                    <h1>Living Habits</h1>
                    <Attribute name = "Cleanliness" value = {currentUser.cleanliness} />
                    <Attribute name = "Bedtime" value = { currentUser.bedtime } />
                    <Attribute name = "Room Loudness" value =  { currentUser.loudness } />
                    <Attribute name = "Person Type" value = { currentUser.personType } />
                </div>
                <div className="userinfo">
                    <h1>Interests</h1>
                    <Attribute name = "Hobbies" value = { arrayToString(currentUser.hobbies) } />
                    <Attribute name = "Clubs" value = { arrayToString(currentUser.clubs) } />
                </div>
                
            </div>)

}
export default Profile;