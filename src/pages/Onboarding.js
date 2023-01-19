import { useState } from "react";
import SubmitToDatabase from "../helpers/SubmitToDatabase";
import CompatabilityQuiz4 from "./CompatibilityQuiz4";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import ClubsForm from "./ClubsForm";
import AcademicInterest from "./AcademicInterest";

function Onboarding({ users, currentUser }) {
    const [step, setStep] = useState(1);
    const [successAlert, setSuccessAlert] = useState(false);
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [concentration, setConcentration] = useState("");
    const [clubs, setClubs] = useState([]);
    const [gender, setGender] = useState("");
    const [currentBlockmates, setCurrentBlockMates] = useState(0);
    const [cleanliness, setCleanliness] = useState(0);
    const [sleepTime, setSleepTime] = useState(0);
    const [hobbies, setHobbies] = useState([]);
    const [roomLoudness, setRoomLoudness] = useState(0);
    const [lookingForGroup, setLookingForGroup] = useState(false);
    const [dorm, setDorm] = useState("");
    const [typeOfPerson, setTypeOfPerson] = useState("");

    const nextStep = () => {
        setStep(step + 1);
    }

    const handleChange = (e, input) => {
        switch (input) {
            case "description":
                setDescription(e.target.value);
                break;
            case "image":
                setSelectedImage(e.target.files[0]);
                setSuccessAlert(true);
                break;
            case "concentration":
                setConcentration(e.target.value);
                break;
            case "clubs":
                setClubs(e);
                console.log(e);
                break;
            case "gender":
                setGender(e.target.value);
                break;
            case "currentBlockmates":
                setCurrentBlockMates(e.target.value);
                break;
            case "cleanliness":
                setCleanliness(e.target.value);
                break;
            case "sleepTime":
                setSleepTime(e.target.value);
                break;
            case "hobbies":
                setHobbies(e.target.value);
                break;
            case "roomLoudness":
                setRoomLoudness(e.target.value);
                break;
            case "lookingForGroup":
                setLookingForGroup(e.target.value);
                break;
            case "dorm":
                setDorm(e.target.value);
                break;
            case "typeOfPerson":
                setTypeOfPerson(e.target.value);
                break;
            default:
                break;
        }
    }

    function submit_onboarding() {

        let user;

        try {
            users = users.filter((user) => (user.uid === currentUser.uid));
            user = users[0];
        } catch (e) {
            return null;
        }

        description ? user.description = description : user.description = "";
        concentration ? user.intendedConcentrations = concentration : user.intendedConcentrations = "";
        clubs ? user.clubs = clubs : user.clubs = [];
        gender ? user.gender = gender : user.gender = "";
        currentBlockmates ? user.numBlockmates = currentBlockmates : user.numBlockmates = 0;
        cleanliness ? user.cleanlinessLevel = cleanliness : user.cleanlinessLevel = 0;
        sleepTime ? user.sleepTime = sleepTime : user.sleepTime = 0;
        hobbies ? user.hobbies = hobbies : user.hobbies = [];
        roomLoudness ? user.roomLoudness = roomLoudness : user.roomLoudness = 0;
        lookingForGroup ? user.lookingForGroup = lookingForGroup : user.lookingForGroup = false;
        dorm ? user.dorm = dorm : user.dorm = "";
        typeOfPerson ? user.typeOfPerson = typeOfPerson : user.typeOfPerson = 0;
        user.onboarded = true;

        return user;
    }

    switch (step) {
        case 1:
            return (
                <Onboarding1 nextStep={nextStep} handleChange={handleChange} users={users} currentUser={currentUser} successAlert={successAlert} />
            )
        case 2:
            return (
                <Onboarding2 nextStep={nextStep} handleChange={handleChange} />
            )
        case 3:
            return(
                <ClubsForm nextStep={nextStep} handleChange={handleChange} />
            )
        case 4:
            return(
                <AcademicInterest nextStep={nextStep} handleChange={handleChange} />
            )
        case 5:
            return(
                <CompatabilityQuiz4 nextStep={nextStep} handleChange={handleChange} />
            )
        case 6:
            return(
                <SubmitToDatabase image={selectedImage} user={submit_onboarding()} />
            )
        default:
            break;
    }
}

export default Onboarding;