import ResultsTable from '../components/ResultsTable';
import React from 'react'
import "../styling/Profile.css"
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
    
    return ( <div className="Profile">
                <div className="userinfo">
                    <img alt="Profile" id="profilePicture" src = { currentUser.image }></img>
                    <h1> { currentUser.name }</h1>
                    <h2> { currentUser.dorm } </h2> 
                </div>
                
            </div>)

}
export default Profile;