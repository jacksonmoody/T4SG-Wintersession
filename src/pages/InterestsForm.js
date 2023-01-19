import { Container, Typography, Box, Select, MenuItem, OutlinedInput, InputLabel, FormControl, Button } from "@mui/material";
import React, { useState, useEffect } from "react";


function InterestsForm({ nextStep, handleChange }) {

    const activitieslist = ["Knitting", "Gaming", "Hiking"]

    const [selectedActivities, setSelectedActivities] = useState([]);

    const doChange = (event) => {

        setSelectedActivities(event.target.value);

    };

    useEffect(() => 
    {
       
        handleChange(selectedActivities, "hobbies");
        
    }, [selectedActivities])

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
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 'bold', paddingBottom: 1, }}>
                        What are your interests?
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 'bold', paddingBottom: 1, }}>
                        Activities
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            labelId="Activities-Select"
                            id="Activities"
                            multiple
                            value={selectedActivities}
                            onChange={doChange}
                            renderValue={(selectedActivities) => selectedActivities.join(', ')}
                        >

                                <MenuItem value={activitieslist[0]}> {activitieslist[0]}</MenuItem>
                                <MenuItem value={activitieslist[1]}> {activitieslist[1]}</MenuItem>
                                <MenuItem value={activitieslist[2]}> {activitieslist[2]}</MenuItem>
                                {/* <MenuItem value={4}>Reading</MenuItem>
                                <MenuItem value={5}>Dancing</MenuItem>
                                <MenuItem value={6}>Cooking</MenuItem>
                                <MenuItem value={7}>Singing</MenuItem>
                                <MenuItem value={8}>Writing</MenuItem>
                                <MenuItem value={9}>Listening to music</MenuItem> */}
                            </Select>
                    </FormControl>
                    {/* <Typography 
                        variant="h6"
                        align="center"
                        sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                        Entertainment
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            labelId="Entertainment-Select"
                            id="Entertainment"
                            label="Entertainment"
                            sx={{
                                p: 0,
                                mb: 2,
                            }}
                            onChange={(e) => handleChange(e, "hobbies")}>
                            <MenuItem value={0}>NBA</MenuItem>
                            <MenuItem value={1}>NHL</MenuItem>
                            <MenuItem value={2}>Movies</MenuItem>
                            <MenuItem value={3}>Sitcoms</MenuItem>
                            <MenuItem value={4}>RomCom</MenuItem>
                            <MenuItem value={5}>Action</MenuItem>
                            <MenuItem value={6}>Comedy</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography 
                        variant="h6"
                        align="center"
                        sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                        Sports
                    </Typography>
                    <FormControl fullWidth>
                            <Select
                                labelId="Sports-Select"
                                id="Sports"
                                label="Sports"
                                sx={{
                                    p: 0,
                                    mb: 2,
                                }}
                                onChange={(e) => handleChange(e, "hobbies")}>
                                <MenuItem value={0}></MenuItem>
                                <MenuItem value={1}>Soccer</MenuItem>
                                <MenuItem value={2}>American Football</MenuItem>
                                <MenuItem value={3}>Rubgy</MenuItem>
                                <MenuItem value={4}>Baseball</MenuItem>
                                <MenuItem value={5}>Tennis</MenuItem>
                                <MenuItem value={6}>Basketball</MenuItem>
                                <MenuItem value={7}>Volleyball</MenuItem>
                                <MenuItem value={8}>Cricket</MenuItem>
                                <MenuItem value={9}>Golf</MenuItem>
                            </Select>
                    </FormControl> */}
                    <Button variant="contained" sx={{ width: '50%', backgroundColor: 'black' }} onClick={() => nextStep()}>
                        Continue
                    </Button>
                </Box>
            </Container>
        </div>

    )
}

export default InterestsForm;