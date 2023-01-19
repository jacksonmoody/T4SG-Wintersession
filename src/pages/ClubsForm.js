import { Container, Typography, Box, Select, MenuItem, FormHelperText, FormControl, InputLabel, Chip, Button } from '@mui/material';
import React, { useState } from 'react';

function ClubsForm({nextStep, handleChange}) {
  const [selected, setSelected] = useState([]);

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="clubs"
         style = {{
             display: "flex",
             height: "100%",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
    }}>
        <Container maxWidth="xs" sx={{m:2}} >
        <Box sx={{ p: 4, border: '4px solid black', borderRadius: '20px', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <Typography 
                         variant="h5"
                         align="center"
                         sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                         CLUBS
                     </Typography>
                     <Typography 
                         variant="h6"
                         align="center"
                         sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                         Select the clubs that you are interested in
                     </Typography>

    <FormControl fullWidth style={{ marginTop: 20}}>
      <InputLabel>Select All</InputLabel>
      <Select
        multiple
        value={selected}
        onChange={selectionChangeHandler}
        renderValue={(selected) => (
          <div>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </div>
        )}
      >
        <MenuItem value={'T4SG'}>T4SG</MenuItem>
        <MenuItem value={'HCCG'}>HCCG</MenuItem>
        <MenuItem value={'CBE'}>CBE</MenuItem>
        <MenuItem value={'HDAG'}>HDAG</MenuItem>
        <MenuItem value={'WICS'}>WICS</MenuItem>
        <MenuItem value={'HSA'}>HSA</MenuItem>
      </Select>
    </FormControl>
            <Button variant="contained" sx={{width: '50%', backgroundColor:'black', marginTop: '10%'}} onClick={() => nextStep()}>
            Continue
            </Button>

            </Box>
        </Container>
     </div>
  );
}

export default ClubsForm;