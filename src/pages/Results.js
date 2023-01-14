import ResultsTable from '../components/ResultsTable';
import algorithm from '../helpers/algorithm';

function Results(props) {
    const headers = ["Name", "Email", "Description"];
    const currentUser = props.users.filter((user) => (user.uid === props.currentUser.uid))[0];
    const users = algorithm(currentUser.preferences, props.users);
    const body = users.map((user) => ([user.name, user.email, user.description]));

    return (
        <div className="Results">
            <h1>Results</h1>
            <ResultsTable header = {headers} body = {body}/>
        </div>
    );
}

export default Results;