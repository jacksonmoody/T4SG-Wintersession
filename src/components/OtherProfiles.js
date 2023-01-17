import React from 'react';
import './OtherProfiles.css'; 

function OtherProfiles () {
	return (
        <div className="step-container">
        <div className="step">
          <h3>Step 1</h3>
          <p>Answer the compatibility quiz</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>View your matches based on interests</p>
        </div>
      <div className="step">
        <h3>Step 3</h3>
        <p>Click into each profile to view your matchers</p>
      </div>
      </div>
	);
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            profile: "https://randomuser.me/api/portraits/men/1.jpg",
            fName: "John",
            lName: "Doe",
            dorm: "Hollis",
            concentration: "Computer Science",
            interests: "Coding and Gaming"
          },
          {
            profile: "https://randomuser.me/api/portraits/men/2.jpg",
            fName: "Jane",
            lName: "Smith",
            dorm: "Canaday",
            concentration: "Mathematics",
            interests: "Reading and Painting"
          },
          {
            profile: "https://randomuser.me/api/portraits/men/3.jpg",
            fName: "Bob",
            lName: "Johnson",
            dorm: "Weld",
            concentration: "Physics",
            interests: "Hiking and Photography"
          }
        ]
      };
    }
  
    render() {
      const { users } = this.state;
      return (
        <div className="frame">
          <div className="users-list-container">
          {users.map((user, index) => (
            <div className="user-container" key={index}>
              <img src={user.profile} alt={user.fName} />
              <div>Name: {user.fName} {user.lName}</div>
              <div>Dorm: {user.dorm}</div>
              <div>Concentration: {user.concentration}</div>
              <div>Interests: {user.interests}</div>
            </div>
          ))}
        </div>
        </div>
      );
    }
  }

export default OtherProfiles;