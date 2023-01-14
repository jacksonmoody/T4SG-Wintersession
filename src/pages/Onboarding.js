import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { updateUser } from "../helpers/database";
import imageUpload from "../helpers/imageUpload";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Onboarding(props) {
    const users = props.users.filter((user) => (user.uid === props.currentUser.uid));
    const user = users[0];
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [successAlert, setSuccessAlert] = useState(false);
    const navigate = useNavigate();

    async function finish_onboarding(e) {
        e.preventDefault();
        const image = await imageUpload(selectedImage);
        setSuccessAlert(true);
        user.description = description;
        user.image = image;
        user.onboarded = true;
        await updateUser(user);
        navigate('/');
    }

    return (
        <Container component="main" maxWidth="s">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h3">
                    Welcome, {user.name}!
                </Typography>
                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                    Let's get started creating your profile.
                </Typography>
                <Box component="form" onSubmit={finish_onboarding} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoComplete="description"
                        autoFocus
                        multiline
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Collapse in={successAlert}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setSuccessAlert(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            Image upload success!
                        </Alert>
                    </Collapse>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 1 }}
                        component="label"
                    >
                        Upload Profile Picture
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => setSelectedImage(e.target.files[0])}
                        />
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 1 }}
                    >
                        Onboard
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Onboarding;