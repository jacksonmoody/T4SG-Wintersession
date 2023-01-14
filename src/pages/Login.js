import { useState } from "react";
import { Link } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../helpers/firebase";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit_normal(e) {
        e.preventDefault();
        loginWithEmailAndPassword(email, password);
    }

    async function submit_google(e) {
        e.preventDefault();
        signInWithGoogle();
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" onSubmit={submit_normal} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 1 }}
                    >
                        Sign In
                    </Button>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    onClick = {submit_google}
                    startIcon = {<GoogleIcon/>}
                >
                    Sign In With Google
                </Button>
                <Link to="/register">
                    Don't have an account? Sign Up
                </Link>
            </Box>
        </Container>
    );
}
export default Login;