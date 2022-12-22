import Budget from "./Budget";
import {Typography } from '@mui/material';

const Layout = () => {
    return (    
    <div>
        <header>
            <Typography variant="h1" style={{fontSize: 30, margin: 15}}>Your Budget</Typography>
        </header>
        <Budget/>
    </div>
    )
}

export default Layout;