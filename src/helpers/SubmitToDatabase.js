import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageUpload from "../helpers/imageUpload";
import { updateUser } from "./database";

export default function SubmitToDatabase({image, user}){
    const navigate = useNavigate();

    useEffect(() => {
        async function submit_data() {
            let userToUpdate = user;

            if (image) {
                const result = await imageUpload(image);
                userToUpdate.image = result.data.link;
            } else {
                userToUpdate.image = "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png";
            }

            await updateUser(userToUpdate);

        }

        submit_data();
        navigate("/");


    },[image, navigate, user]);
    
    return(
        <p>Submitting to database. Please wait.</p>
    )
}