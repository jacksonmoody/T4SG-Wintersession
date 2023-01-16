import React from 'react';

function OtherProfiles () {
	return (
        <div>
            <h1> How To View Other Profiles </h1>
            <h2>Based on your answers to the compatibility quiz, and interests, you will got match to other users. 
            Our app will display a list of users and you can click into each profile to view your matchers. </h2>
            <App />
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
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <img src={user.profile} alt={user.fName} />
              <div>Name: {user.fName} {user.lName}</div>
              <div>Dorm: {user.dorm}</div>
              <div>Concentration: {user.concentration}</div>
              <div>Interests: {user.interests}</div>
            </div>
          ))}
        </div>
      );
    }
  }

export default OtherProfiles;
