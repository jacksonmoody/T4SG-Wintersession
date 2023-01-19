import {Container, Typography, Box, Select, MenuItem, OutlinedInput, InputLabel, FormControl, Button} from "@mui/material";
import React from "react";

function ClubsForm({nextStep, handleChange}) {
     return(
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
                         <FormControl fullWidth>
                             <Select
                                 labelId="Clubs-Select"
                                 id="Clubs"
                                 label="Clubs"
                                 sx={{
                                     p: 0,
                                     mb: 2,
                                 }}
                                 onChange={(e) => handleChange(e, "clubs")}>
                                 <MenuItem value={0}></MenuItem>
                                 <MenuItem value={1}>T4SG</MenuItem>
                                 <MenuItem value={2}>HCCG</MenuItem>
                                 <MenuItem value={3}>CBE</MenuItem>
                                 <MenuItem value={4}>HDAG</MenuItem>
                                 <MenuItem value={5}>WICS</MenuItem>
                                 <MenuItem value={6}>AADT</MenuItem>
                                 <MenuItem value={7}>IOP</MenuItem>
                                 <MenuItem value={8}>HSA</MenuItem>
                                 <MenuItem value={9}>The Crimson</MenuItem>
                             </Select>
                     </FormControl>
                     <Button variant="contained" sx={{width: '50%', backgroundColor:'black'}} onClick={() => nextStep()}>
                     Continue
                     </Button>
                 </Box>
             </Container>
         </div>

     )
 }

export default ClubsForm;