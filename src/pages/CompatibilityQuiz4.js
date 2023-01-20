import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Button } from "@mui/material";
export default CompatabilityQuiz4;
const marks = [
  {
    value: 0,
    label: "Stay in"
  },
  {
    value: 10,
    label: "Go out"
  }
];
function CompatabilityQuiz4({ nextStep, handleChange }) {
  return (
    <Container component="main" maxWidth="xs" >
      <Box
        sx={{
          m: 2,
          border: '4px solid black',
          borderRadius: '20px',
          marginTop: 8,
          display: "flex",
          flexDirection: "Column",
          alignItems: "center",
        }}>
        <Typography align="center" variant="h3"> Compatability Quiz </Typography>
        <Typography align="center" variant="h5"> Q4: What type of person are you? </Typography>
        <Box sx={{ p: 3, width: 300, border: 1 }}>
          <Slider
            aria-label="Custom marks"
            onChange={(e) => handleChange(e, "typeOfPerson")}
            defaultValue={5}
            min={0}
            max={10}
            step={2}
            marks={marks}
          />
          <Typography align="center" variant="h5"> Your Answer </Typography>
        </Box>
        <Box sx={{ p: 3, width: 300, border: 1, marginBottom: 3}}>
          <Slider
            aria-label="Custom marks"
            defaultValue={5}
            min={0}
            max={10}
            step={2}
            marks={marks}
          />
          <Typography align="center" variant="h5"> Preferred Blockmate Answer </Typography>
        </Box>
        <Typography align="center" variant="h5"> Rate this question! </Typography>
        <Box>
          <Stack direction="row" spacing={1} sx = {{marginTop: 3}}>
            <Button variant="outlined" align="center" >Not Important</Button>
            <Button variant="outlined" align="center" >Important</Button>
            <Button variant="outlined" align="center" >Very Important</Button>
          </Stack>
        </Box>
        <Stack direction="row" spacing={5} sx = {{marginTop: 3, marginBottom: 3}}>
          <Button onClick={() => nextStep()} variant="outlined" align="center" justifyContent="center" alignItems="center" > Continue</Button>
        </Stack>
      </Box>
    </Container>
  );
}