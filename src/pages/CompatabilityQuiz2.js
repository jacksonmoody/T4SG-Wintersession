import { Slider } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function CompatabilityQuiz2({ nextStep, handleChange }) {
  const marks = [
    {
      value: 0,
      label: '9PM',
    },
    {
      value: 2,
      label: '10PM',
    },
    {
      value: 4,
      label: '11PM',
    },
    {
      value: 6,
      label: '12AM',
    },
    {
      value: 8,
      label: '1AM',
    },
    {
      value: 10,
      label: '2AM',
    },
  ];

  return (
    <div className="compatibility"
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Container maxWidth="xs" sx={{ m: 2 }}>
        <CssBaseline />
        <Box
          sx={{
            p: 4, 
            border: '4px solid black', 
            borderRadius: '20px', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h3" align="center">
            COMPATABILITY QUIZ
          </Typography>

          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', paddingBottom: 1 }}>
            Q2: How early do you go to bed?
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
              min={0}
              max={10}
              step={2}
              marks={marks}
              sx={{
                color: 'black',
                width: '80%',

              }}
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
              defaultValue={50}
              valueLabelDisplay="auto"
              min={0}
              max={10}
              step={2}
              marks={marks}
              sx={{
                color: 'black',
                width: '80%',

              }}
              onChange={(e) => handleChange(e, "Bedtime")}
            >
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
                }}>
                <MenuItem value={0}>Not Important</MenuItem>
                <MenuItem value={1}>Somewhat Important</MenuItem>
                <MenuItem value={2}>Important</MenuItem>
                <MenuItem value={3}>Very Important</MenuItem>
              </Select>
            </FormControl>
          </Container>
          <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ width: '50%', backgroundColor: 'black' }} onClick={() => nextStep()}>
            Continue
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default CompatabilityQuiz2;