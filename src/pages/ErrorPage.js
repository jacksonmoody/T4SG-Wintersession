import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="Error-Page">
            <Container maxWidth = "sm">
                <Box textAlign = 'center' sx = {{marginTop: 8}}>
                    <h1>Sorry, the page was not found.</h1>
                    <Button variant="contained" startIcon={<HomeIcon />} style={{ minWidth: '200px', minHeight: '60px', fontSize: '18px', backgroundColor: "##1e90ff", marginTop: 15 }} onClick={() => navigate('/')}>Go Home</Button>
                </Box>

            </Container>
        </div>
    );
}

export default ErrorPage;