import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import '@fontsource/roboto'
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <AppBar position="static" sx={{background: '#8bc34a'}}>
            <Toolbar>
                <Typography variant="h6" sx={{color: 'white' ,flexGrow: 1, fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', fontSize: '35px'}}>
                    My Blog
                </Typography>

                <Button LinkComponent={Link} to='/home' color="inherit" sx={{fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', fontSize: '17px', padding: '10px 20px', borderRadius: '8px', transition: 'background-color 0.3s', '&:hover': {backgroundColor: 'lightgreen', color: 'black'},}}>
                    Home
                </Button>
                <Button LinkComponent={Link} to='/login' color="inherit" sx={{fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', fontSize: '17px', padding: '10px 20px', borderRadius: '8px', transition: 'background-color 0.3s', '&:hover': {backgroundColor: 'lightgreen', color: 'black'},}}>
                    Login
                </Button>
                <Button LinkComponent={Link} to='/register' color="inherit" sx={{fontFamily: "'Poppins', sans-serif", fontWeight: 'bold', fontSize: '17px', padding: '10px 20px', borderRadius: '8px', transition: 'background-color 0.3s', '&:hover': {backgroundColor: 'lightgreen', color: 'black'},}}>
                    Register
                </Button>
            </Toolbar>
        </AppBar>
    );
}