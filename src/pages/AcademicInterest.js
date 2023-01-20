import {Container, Typography, Box, Select, MenuItem, FormControl, Button} from "@mui/material";
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
                                 onChange={(e) => handleChange(e, "concentration")}>
                                 <MenuItem value={0}></MenuItem>
                                 <MenuItem value={"Anthropology"}>Anthropology</MenuItem>
                                 <MenuItem value={"Classics"}>Classics</MenuItem>
                                 <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                                 <MenuItem value={"Economics"}>Economics</MenuItem>
                                 <MenuItem value={"History"}>History</MenuItem>
                                 <MenuItem value={"Government"}>Government</MenuItem>
                                 <MenuItem value={"Math"}>Math</MenuItem>
                                 <MenuItem value={"Physics"}>Physics</MenuItem>
                                 <MenuItem value={"Biology"}>Biology</MenuItem>
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