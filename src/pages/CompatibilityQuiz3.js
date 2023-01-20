import { Container, Slider, Typography, Box, MenuItem, Select, FormControl, Button, InputLabel } from "@mui/material";

const marks = [
    {
        value: 1,
        label: "Silent",
    },
    {
        value: 10,
        label: "Very Loud",
    }
]

function CompatibilityQuiz3({ nextStep, handleChange }) {
    return (
        <div className="compatibility"
            style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Container maxWidth="xs" sx={{ m: 2 }} >
                <Box sx={{ p: 4, border: '4px solid black', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ fontWeight: 'bold', paddingBottom: 1, }}>
                        Compatibility Quiz
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 'bold', paddingBottom: 1, }}>
                        Q3: How loud do you prefer your room to be?
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ paddingTop: 1, paddingLeft: 1, paddingRight: 1, }}>
                        Your Answer
                    </Typography>
                    <Container sx={{ display: 'flex', justifyContent: 'center', p: 2, marginTop: 2, border: '4px solid black', borderRadius: '20px', }}>
                        <Slider
                            aria-label="Bedtime"
                            defaultValue={5}
                            valueLabelDisplay="auto"
                            min={1}
                            max={10}
                            step={1}
                            marks={marks}
                            sx={{
                                color: 'black',
                                width: '80%',
                            }}
                            onChange={(e) => handleChange(e, "roomLoudness")}
                        >
                        </Slider>
                    </Container>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ paddingTop: 2, paddingLeft: 1, paddingRight: 1, }}>
                        Preferred Roommate Answer
                    </Typography>
                    <Container sx={{ display: 'flex', justifyContent: 'center', p: 2, marginTop: 2, border: '4px solid black', borderRadius: '20px', }}>
                        <Slider
                            aria-label="Bedtime"
                            defaultValue={5}
                            valueLabelDisplay="auto"
                            min={1}
                            max={10}
                            step={1}
                            marks={marks}
                            sx={{
                                color: 'black',
                                width: '80%',
                            }}>
                        </Slider>
                    </Container>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ paddingTop: 2, paddingLeft: 1, paddingRight: 1, }}>
                        Rate this question!
                    </Typography>
                    <Container sx={{ p: 4, display: "flex", flexDirection: "row" }}>
                        <FormControl fullWidth>
                            <InputLabel id="Importance-Label">Importance</InputLabel>
                            <Select
                                labelId="Importance-Select"
                                id="Importance"
                                label="Importance"
                                sx={{
                                    p: 0,
                                }}
                                onChange={(e) => handleChange(e,)}>
                                <MenuItem value={0}>Not Important</MenuItem>
                                <MenuItem value={1}>Somewhat Important</MenuItem>
                                <MenuItem value={2}>Important</MenuItem>
                                <MenuItem value={3}>Very Important</MenuItem>
                            </Select>
                        </FormControl>
                    </Container>
                    <Button variant="contained" sx={{ width: '50%', backgroundColor: 'black' }} onClick={() => nextStep()}>
                        Continue
                    </Button>
                </Box>
            </Container>
        </div>

    )
}

export default CompatibilityQuiz3