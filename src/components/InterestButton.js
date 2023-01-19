import Button from "@mui/material/Button"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import React from "react"

function InterestButton(props) {

    const [flag, setFlag] = React.useState(false); // Used to change button colors when clicked

    const handleClick = () => {
        setFlag(!flag);
        };
    
    const { palette } = createTheme(); 
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({ // Sets colors to be used for when clicked
        palette: {
        black: createColor('#000000'),
        gray: createColor('#808080'),
        },
    });
    
    return(
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={handleClick} color={flag ? "black" : "gray"} sx={{backgroundColor:'gray', margin: 1,}}>
                 { props.label }
            </Button>
        </ThemeProvider> 
    )
}

export default InterestButton;