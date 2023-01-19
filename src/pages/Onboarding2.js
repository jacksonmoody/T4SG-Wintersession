import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from "@mui/material/Typography";

function Onboarding2({ nextStep, handleChange }) {
    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                    Name of this Onboarding step.
                </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => handleChange(e, "NAME_OF_FIELD")}
                />

                <Button
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 3, mb: 1 }}
                    onClick={() => nextStep()}
                >
                    Continue
                </Button>
            </Box>
        </Container>
    );
}

export default Onboarding2;