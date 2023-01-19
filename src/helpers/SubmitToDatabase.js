import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageUpload from "../helpers/imageUpload";
import { updateUser } from "./database";

export default function SubmitToDatabase({ image, user }) {
    const navigate = useNavigate();

    useEffect(() => {
        async function submit_data() {
            let userToUpdate = user;
            userToUpdate.image = "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png";
            if (image) {
                const result = await imageUpload(image);
                userToUpdate.image = result.data.link;
            }
            await updateUser(userToUpdate);
            navigate("/");

        }

        submit_data();

    }, []);

    return (
        <>
            <h3>Submitting to database. Please wait.</h3>
            <p>If this is taking forever, it's probably an issue with <a href="https://api.imgur.com/">Imgur</a> lol.</p>
        </>
    )
}