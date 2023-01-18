import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { auth } from "../helpers/firebase";
import { Outlet, useNavigate } from 'react-router-dom';
import '../styling/Layout.css';
import React from 'react';

function Layout(props) {

  const navigate = useNavigate();

  function logout() {
    auth.signOut();
    navigate('/login');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              T4SG Wintersession Project | Welcome{props.username ? ", " + props.username + "!" : "!"}
            </Typography>
            <Box sx={{ pr: 2, display: { xs: 'none', md: 'flex'} }}>
                <Button color = "inherit" onClick = {() => navigate('/')}>Home</Button>
                <Button color = "inherit" onClick = {() => navigate('/profile')}>Profile</Button>
                <Button color = "inherit" onClick = {() => navigate('/results')}>Results</Button>
            </Box>
            <Button variant = "outlined" color = "inherit" onClick={logout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className = "outlet">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;