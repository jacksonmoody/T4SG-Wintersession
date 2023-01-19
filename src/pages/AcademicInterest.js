import {Container, Typography, Box, Select, MenuItem, OutlinedInput, InputLabel, FormControl, Button} from "@mui/material";
import React from "react";

function AcademicInterest({nextStep, handleChange}) {
     return(
         <div className="academic"
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
                         ACADEMIC INTEREST
                     </Typography>
                     <Typography 
                         variant="h6"
                         align="center"
                         sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                         What is your intended concentration?
                     </Typography>
                         <FormControl fullWidth>
                             <Select
                                 labelId="Select-Academic"
                                 id="Academic"
                                 label="Academic"
                                 sx={{
                                     p: 0,
                                     mb: 2,
                                 }}
                                 onChange={(e) => handleChange(e, "academic")}>
                                 <MenuItem value={0}></MenuItem>
                                 <MenuItem value={1}>Anthropology</MenuItem>
                                 <MenuItem value={2}>Classics</MenuItem>
                                 <MenuItem value={3}>Computer Science</MenuItem>
                                 <MenuItem value={4}>Economics</MenuItem>
                                 <MenuItem value={5}>History</MenuItem>
                                 <MenuItem value={6}>Government</MenuItem>
                                 <MenuItem value={7}>Math</MenuItem>
                                 <MenuItem value={8}>Physics</MenuItem>
                                 <MenuItem value={9}>Biology</MenuItem>
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

export default AcademicInterest;