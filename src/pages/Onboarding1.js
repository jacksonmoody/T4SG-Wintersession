import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Onboarding1({ users, currentUser, nextStep, handleChange, successAlert }) {

    let theUsers;
    let user;
    let name;

    try {
        theUsers = users.filter((user) => (user.uid === currentUser.uid));
        user = theUsers[0];
        name = user.name;
    } catch (e) {
        return null;
    }

    return (
        <Container component="main" maxWidth="s">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h3">
                    Welcome, {name}!
                </Typography>
                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                    Let's get started creating your profile.
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Introduce yourself here!"
                        name="description"
                        autoComplete="description"
                        multiline={true}
                        rows={3}
                        onChange={(e) => handleChange(e, "description")}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="gender"
                        label="What is your gender?"
                        name="gender"
                        autoComplete="gender"
                        onChange={(e) => handleChange(e, "gender")}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="blockmates"
                        label="How many blockmates do you currently have?"
                        name="blockmates"
                        autoComplete="blockmates"
                        onChange={(e) => handleChange(e, "currentBlockmates")}
                    />
                    <Collapse in={successAlert}>
                        <Alert>
                            Image upload success!
                        </Alert>
                    </Collapse>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 1 }}
                        component="label"
                    >
                        Upload Profile Picture
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => handleChange(e, "image")}
                        />
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ mt: 3, mb: 1 }}
                        onClick={() => nextStep()}
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Onboarding1;
