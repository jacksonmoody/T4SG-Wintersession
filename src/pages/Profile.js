import ResultsTable from '../components/ResultsTable';

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
}

export default Profile;