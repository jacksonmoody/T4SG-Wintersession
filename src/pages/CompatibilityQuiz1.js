import { Slider, Grid, Container } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function CompatibilityQuiz1({ nextStep, handleChange }) {

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    m: 3,
                    border: '4px solid black',
                    borderRadius: '20px',
                    marginTop: 3,
                }}>
                <Grid container justify="center" alignItems="center" direction="column">
                    <div>
                        <h1 align="center">Compatibility Quiz</h1>
                        <p align="center" style={{ fontSize: '20px' }}>Q1: How often do you clean your room?</p>
                        <Grid item align="center">
                            <Box style={{ margin: "0.5rem", padding: "0.1rem", width: "80px", backgroundColor: "lightblue", borderRadius: "10px" }} align="center">
                                <p style={{ fontSize: "12px" }}>Your Answer</p>
                            </Box>
                            <Slider
                                size="small"
                                defaultValue={5}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                onChange={(e) => handleChange(e, "cleanlinessLevel")}
                                min={0}
                                max={10}
                                step={1}
                                marks={[
                                    { value: 0, label: 'Rarely' },
                                    { value: 10, label: 'Regularly' },
                                ]}
                                style={{ width: 350 }}
                            >
                            </Slider>
                        </Grid>
                        <Grid item align="center">
                            <Box style={{ margin: "0.5rem", padding: "0.1rem", width: "200px", backgroundColor: "lightblue", borderRadius: "10px" }} align="center">
                                <p style={{ fontSize: "12px" }}>Preferred Blockmate Answer</p>
                            </Box>
                            <Slider
                                size="small"
                                defaultValue={5}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                min={0}
                                max={10}
                                step={1}
                                marks={[
                                    { value: 0, label: 'Rarely' },
                                    { value: 10, label: 'Regularly' },
                                ]}
                                style={{ width: 350 }}
                            >
                            </Slider>
                        </Grid>
                        <Grid item align="center" sx = {{marginBottom: 3}}>
                            <Button variant="contained" color="primary" style={{ textDecoration: 'none' }} endIcon={<ArrowForwardIcon />} onClick={() => nextStep()}>
                                Continue
                            </Button>
                        </Grid>
                    </div>
                </Grid>
            </Box>
        </Container>
    );
}

export default CompatibilityQuiz1