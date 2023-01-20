import { Container, Typography, Box, Select, MenuItem, OutlinedInput, InputLabel, FormControl, Button } from "@mui/material";
import React, { useState, useEffect } from "react";


function InterestsForm({ nextStep, handleChange }) {

    const activitieslist = ["Painting", "Photography", "Sculpture", "Drawing", "Singing", "Dancing", 
    "Acting", "Writing", "Gardening", "Cooking", "Knitting", "Knitting", "Gaming"]

    const entertainmentList = ["Action", "Comedy", "Drama", "Science Fiction",
     "Horror", "Romance", "Thriller", "Mystery", "Adventure", 
    "Fantasy", "Anime", "NFL", "MLB", "NBA",
    "NHL", "Professional Soccer"]

    const sportsList = ["Football", "Basketball", "Soccer", "Tennis", "Baseball", 
    "Golf", "Swimming", "Volleyball", "Ice Hockey", "Field Hockey", "Rugby", 
    "Cricket", "Track and Field", "Cross Country", "Skiing", 
    "Snowboarding", "Surfing", "Diving", "Gymnastics", "Rowing"]

    //Create new state variables for entertainment and sports here
    const [selectedActivities, setSelectedActivities] = useState([]);

    const doChangeActivities = (event) => {

        setSelectedActivities(event.target.value);

    };

    const [selectedEntertainment, setSelectedEntertainment] = useState([]);

    const doChangeEntertainment = (event) => {

        setSelectedEntertainment(event.target.value);

    };

    const [selectedSports, setSelectedSports] = useState([]);

    const doChangeSports = (event) => {

        setSelectedSports(event.target.value);

    };

    //Make additional doChange functions for entertainment and sports here

    useEffect(() => 
    {
        //Here you can concatenate the activities, entertainment, and sports arrays into a single array
        //Then pass this array into the handleChange function
       
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
                            sx={{
                                p: 0,
                                mb: 2,
                            }}
                            onChange={doChangeActivities}
                            renderValue={(selectedActivities) => selectedActivities.join(', ')}
                        >
                                <MenuItem value={ activitieslist[0] }> { activitieslist[0] } </MenuItem>
                                <MenuItem value={ activitieslist[1] }> { activitieslist[1] } </MenuItem>
                                <MenuItem value={ activitieslist[2] }> { activitieslist[2] } </MenuItem>
                                <MenuItem value={ activitieslist[3] }> { activitieslist[3] } </MenuItem>
                                <MenuItem value={ activitieslist[4] }> { activitieslist[4] } </MenuItem>
                                <MenuItem value={ activitieslist[5] }> { activitieslist[5] } </MenuItem>
                                <MenuItem value={ activitieslist[6] }> { activitieslist[6] } </MenuItem>
                                <MenuItem value={ activitieslist[7] }> { activitieslist[7] } </MenuItem>
                                <MenuItem value={ activitieslist[8] }> { activitieslist[8] } </MenuItem>
                                <MenuItem value={ activitieslist[9] }> { activitieslist[9] } </MenuItem>
                                <MenuItem value={ activitieslist[10] }> { activitieslist[10] } </MenuItem>
                                <MenuItem value={ activitieslist[11] }> { activitieslist[11] } </MenuItem>
                                <MenuItem value={ activitieslist[12] }> { activitieslist[12] } </MenuItem>
                            </Select>
                    </FormControl>
                    <Typography 
                        variant="h6"
                        align="center"
                        sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                        Entertainment
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            labelId="Entertainment-Select"
                            id="Entertainment"
                            multiple
                            value={selectedEntertainment}
                            sx={{
                                p: 0,
                                mb: 2,
                            }}
                            onChange={doChangeEntertainment}
                            renderValue={(selectedEntertainment) => selectedEntertainment.join(', ')}
                            label="Entertainment">
                            <MenuItem value={ entertainmentList[0] }>{ entertainmentList[0] }</MenuItem>
                            <MenuItem value={ entertainmentList[1] }>{ entertainmentList[1] }</MenuItem>
                            <MenuItem value={ entertainmentList[2] }>{ entertainmentList[2] }</MenuItem>
                            <MenuItem value={ entertainmentList[3] }>{ entertainmentList[3] }</MenuItem>
                            <MenuItem value={ entertainmentList[4] }>{ entertainmentList[4] }</MenuItem>
                            <MenuItem value={ entertainmentList[5] }>{ entertainmentList[5] }</MenuItem>
                            <MenuItem value={ entertainmentList[6] }>{ entertainmentList[6] }</MenuItem>
                            <MenuItem value={ entertainmentList[7] }>{ entertainmentList[7] }</MenuItem>
                            <MenuItem value={ entertainmentList[8] }>{ entertainmentList[8] }</MenuItem>
                            <MenuItem value={ entertainmentList[9] }>{ entertainmentList[9] }</MenuItem>
                            <MenuItem value={ entertainmentList[10] }>{ entertainmentList[10] }</MenuItem>
                            <MenuItem value={ entertainmentList[11] }>{ entertainmentList[11] }</MenuItem>
                            <MenuItem value={ entertainmentList[12] }>{ entertainmentList[12] }</MenuItem>
                            <MenuItem value={ entertainmentList[13] }>{ entertainmentList[13] }</MenuItem>
                            <MenuItem value={ entertainmentList[14] }>{ entertainmentList[14] }</MenuItem>
                            <MenuItem value={ entertainmentList[15] }>{ entertainmentList[15] }</MenuItem>

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
                                onChange={doChangeSports}
                                renderValue={(selectedSports) => selectedSports.join(', ')}>
                                <MenuItem value={ sportsList[0] }> { sportsList[0] }</MenuItem>
                                <MenuItem value={ sportsList[1] }> { sportsList[1] }</MenuItem>
                                <MenuItem value={ sportsList[2] }> { sportsList[2] }</MenuItem>
                                <MenuItem value={ sportsList[3] }> { sportsList[3] }</MenuItem>
                                <MenuItem value={ sportsList[4] }> { sportsList[4] }</MenuItem>
                                <MenuItem value={ sportsList[5] }> { sportsList[5] }</MenuItem>
                                <MenuItem value={ sportsList[6] }> { sportsList[6] }</MenuItem>
                                <MenuItem value={ sportsList[7] }> { sportsList[7] }</MenuItem>
                                <MenuItem value={ sportsList[8] }> { sportsList[8] }</MenuItem>
                                <MenuItem value={ sportsList[9] }> { sportsList[9] }</MenuItem>
                                <MenuItem value={ sportsList[10] }> { sportsList[10] }</MenuItem>
                                <MenuItem value={ sportsList[11] }> { sportsList[11] }</MenuItem>
                                <MenuItem value={ sportsList[12] }> { sportsList[12] }</MenuItem>
                                <MenuItem value={ sportsList[13] }> { sportsList[13] }</MenuItem>
                                <MenuItem value={ sportsList[14] }> { sportsList[14] }</MenuItem>
                                <MenuItem value={ sportsList[15] }> { sportsList[15] }</MenuItem>
                                <MenuItem value={ sportsList[16] }> { sportsList[16] }</MenuItem>
                                <MenuItem value={ sportsList[17] }> { sportsList[17] }</MenuItem>
                                <MenuItem value={ sportsList[18] }> { sportsList[18] }</MenuItem>
                                <MenuItem value={ sportsList[19] }> { sportsList[19] }</MenuItem>
                                
                            </Select>
                    </FormControl>
                    <Button variant="contained" sx={{ width: '50%', backgroundColor: 'black' }} onClick={() => nextStep()}>
                        Continue
                    </Button>
                </Box>
            </Container>
        </div>

    )
}

export default InterestsForm;