import { Slider, Grid } from "@mui/material";
import { useState } from 'react';
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function CompatibilityQuiz1 () {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };
    
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const location = useLocation();

    function handleContinue() {
        location.pathname === '/' ? location.push("/") : location.push("/");
    }

    return (
        <Grid container justify="center" alignItems="center" direction="column">
            <div>
                <h1 align="center">Compatibility Quiz</h1>
                <p align="center" style={{fontSize: '20px'}}>Q1: How often do you clean your room?</p>
                <Grid item align="center">
                <Box style={{margin: "0.5rem", padding: "0.1rem", width: "80px", backgroundColor: "lightblue", borderRadius: "10px"}} align="center">
                    <p style={{fontSize: "12px"}}>Your Answer</p>
                </Box>
                <Slider
                    size="small"
                    defaultValue={5}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    value={value1}
                    onChange={handleChange1}
                    min={0}
                    max={10}
                    step={1}
                    marks={[
                        {value: 0, label: 'Rarely'},
                        {value: 10, label: 'Regularly'},
                    ]}
                    style={{ width: 400 }}
                />
                </Grid>
                <Grid item align="center">
                <Box style={{margin: "0.5rem", padding: "0.1rem", width: "200px", backgroundColor: "lightblue", borderRadius: "10px"}} align="center">
                    <p style={{fontSize: "12px"}}>Preferred Blockmate Answer</p>
                </Box>
                <Slider
                    size="small"
                    defaultValue={5}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    value={value2}
                    onChange={handleChange2}
                    min={0}
                    max={10}
                    step={1}
                    marks={[
                        {value: 0, label: 'Rarely'},
                        {value: 10, label: 'Regularly'},
                    ]}
                    style={{ width: 400 }}
                />
                </Grid>
                <Grid item align="center">
                <Link to="/" style={{textDecoration: 'none'}} onClick={handleContinue}>
                <Button variant="contained" color="primary" style={{ textDecoration: 'none' }} endIcon={<ArrowForwardIcon />}>
                     Continue
                </Button>
                </Link>
                
            </Grid>
            </div>
        </Grid>
        
    );
}

export default CompatibilityQuiz1