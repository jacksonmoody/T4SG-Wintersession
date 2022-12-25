import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {auth} from "../firebase";
import { Outlet, useNavigate } from 'react-router-dom';

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
              T4SG Wintersession Project | Welcome{props.username ? ", " + props.username : "!"}
            </Typography>
            <Button color = "inherit" onClick = {logout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default Layout;