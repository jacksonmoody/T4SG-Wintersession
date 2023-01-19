import { Container, Typography, Box} from "@mui/material";
import InterestButton from "../components/InterestButton";
import React from "react";

function InterestsForm() {
    
    return(
        <div className="compatibility"
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
                        What are your interests?
                    </Typography>
                    <Typography 
                        variant="h6"
                        align="center"
                        sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                        Activities
                    </Typography>
                    <Box sx={{ height: '50%', maxWidth:'100%', overflowX: 'scroll', whiteSpace: 'nowrap', display: 'flex'}}>
                        <InterestButton label="Gaming"/>
                        <InterestButton label="Knitting"/>
                        <InterestButton label="Singing"/>
                        <InterestButton label="Reading"/>
                        <InterestButton label="Writing"/>
                    </Box>
                    <Typography 
                        variant="h6"
                        align="center"
                        sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                        Entertainment
                    </Typography>
                    <Typography 
                        variant="h6"
                        align="center"
                        sx={{fontWeight: 'bold', paddingBottom: 1,}}>
                        Sports
                    </Typography>
                </Box>
            </Container>
        </div>
        
    )
}

export default InterestsForm;