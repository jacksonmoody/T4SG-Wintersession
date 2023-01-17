import React from 'react';
import './OtherProfiles.css'; 

// The "OtherProfiles" function is defined, which returns JSX that renders three step containers with instructions on how to view other profiles, and a App component
function OtherProfiles () {
	return (
    <div className="main-container">
    <div className="step-container">
        <div className="step">
            <span role="img" aria-label="emoji">🧪</span>
            <p>1. Answer the compatibility quiz</p>
        </div>
        <div className="step">      
            <span role="img" aria-label="emoji">✨</span>
            <p>2. View your matches based on interests</p>
        </div>
        <div className="step">
            <span role="img" aria-label="emoji">💡</span>
            <p>3. Click into each profile to view your matchers</p>
        </div>
    </div>
    <App />
</div>
	);
}

// The "App" class is defined as a React component that has a constructor method that initializes the state with an array of user objects.
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
            profile: "https://randomuser.me/api/portraits/women/2.jpg",
            fName: "Lindsey",
            lName: "Zhang",
            dorm: "Canaday",
            concentration: "Goverment",
            interests: "Reading and Painting"
          },
          {
            profile: "https://randomuser.me/api/portraits/men/4.jpg",
            fName: "Bob",
            lName: "Johnson",
            dorm: "Weld",
            concentration: "Physics",
            interests: "Hiking and Photography"
          }
        ]
      };
    }
  
// In the render method, the users from state are destructured and mapped over to create a "user-container" div for each user.

render() {
  const { users } = this.state;
  return (
    <div className="frame">
      <div className="users-list-container">
        {users.map((user, index) => (
          // Each "user-container" div contains an image, and data about the user such as name, dorm, concentration, and interests.
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