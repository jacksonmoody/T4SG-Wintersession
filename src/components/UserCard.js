import { Chip, Button, Typography } from '@mui/material';
import '../styling/UserCard.css';

function UserCard(props) {
    return (
        <div className="parent-container">
            <div className="user-card">
                <div className="user-name">{props.name}</div>
                <div className='image-name-container'>
                    <img src={props.image} className="user-image" alt={props.image} sx={{ borderRadius: '50%' }}/>
                </div>
                <br />
                <Button
                    sx={{marginLeft: 7}}
                    variant="contained"
                    size="large"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:` + props.email + `?subject=Blocking Group Match&body=Hi, I am interested in being in your blocking group!`}
                >
                    <Typography variant="button" style={{ fontSize: '0.69rem' }}>
                        Send Message
                    </Typography>
                </Button>
                <br />
                <Chip label="Description" component="div" className="small-label" /> <div className="user-info">{props.description}</div>
                <br />
                <Chip label="Clubs" component="div" className="small-label" /> <div className="user-info">{props.clubs}</div>
                <br />
                <Chip label="Gender" component="div" className="small-label" /> <div className="user-info">{props.gender}</div>
                <br />
                <Chip label="Blockmates" component="div" className="small-label" /> <div className="user-info">{props.numBlockmates}</div>
                <br />
                <Chip label="Concentration" component="div" className="small-label" /> <div className="user-info">{props.intendedConcentrations}</div>
                <br />
                <Chip label="Cleanliness" component="div" className="small-label" /> <div className="user-info">{props.cleanlinessLevel}</div>
                <br />
                <Chip label="Sleep Time" component="div" className="small-label" /> <div className="user-info">{props.sleepTime}</div>
                <br />
                <Chip label="Hobbies" component="div" className="small-label" /> <div className="user-info">{props.hobbies}</div>
                <br />
                <Chip label="Room Loudness" component="div" className="small-label" /> <div className="user-info">{props.roomLoudness}</div>
                <br />
                <Chip label="Group Seek" component="div" className="small-label" /> <div className="user-info"> {props.lookingForGroup}</div>
                <br />
                <Chip label="Dorm" component="div" className="small-label" /> <div className="user-info">{props.dorm}</div>
                <br />
                <Chip label="Type of Person" component="div" className="small-label" /> <div className="user-info">{props.typeOfPerson}</div>
                <br />
            </div>
        </div>
    )
}

export default UserCard