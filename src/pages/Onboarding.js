import { useState } from "react";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import { useNavigate } from "react-router-dom";
import imageUpload from "../helpers/imageUpload";
import { updateUser } from "../helpers/database";

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
    const navigate = useNavigate();

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
                setClubs(e.target.value);
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

    async function submit_onboarding() {

        let user;

        try {
            users = users.filter((user) => (user.uid === currentUser.uid));
            user = users[0];
        } catch (e) {
            return null;
        }

        if (selectedImage) {
            const result = await imageUpload(selectedImage);
            user.image = result.data.link;
        } else {
            user.image = "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png";
        }

        try {
            user.description = description;
            user.intendedConcentrations = concentration;
            user.clubs = clubs;
            user.gender = gender;
            user.numBlockmates = currentBlockmates;
            user.cleanlinessLevel = cleanliness;
            user.sleepTime = sleepTime;
            user.hobbies = hobbies;
            user.roomLoudness = roomLoudness;
            user.lookingForGroup = lookingForGroup;
            user.dorm = dorm;
            user.typeOfPerson = typeOfPerson;
            user.onboarded = true;
        } catch (e) {
            user = { description: "", intendedConcentrations: "", clubs: [], gender: "", numBlockmates: 0, cleanlinessLevel: 0, sleepTime: 0, hobbies: [], roomLoudness: 0, lookingForGroup: false, dorm: "", typeOfPerson: "", onboarded: true }
        }
        
        console.log("Updating user...");
        console.log(user);

        await updateUser(user);
        navigate('/');
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
            submit_onboarding();
            break;
        default:
            break;
    }
}

export default Onboarding;