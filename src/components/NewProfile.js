function CreateProfile(props) {
    //Anything passed into the component can be accessed via props.(something)
    return (
        <div>
            <h1>How To Create a Profile</h1>
            <body>Welcome! To begin the process, you must first sign-up for an account. 
               <ol>
                    <li>Fill out the questionnaire </li>
                    <li>Click the top right corner of the screen on the user icon. </li>
                    <li>Edit your information such as including a profile picture. </li>
                    <li>Once you have finished filling out your information, scroll down to the bottom of the screen. </li>
                </ol>
            </body>

        </div>
    );
}

export default CreateProfile;
