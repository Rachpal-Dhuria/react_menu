import React from 'react';
import { AppBar, Toolbar, IconButton, Icon  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';





const Header = () => {
    return(
        <>
        <AppBar
        position="fixed"
        style={{
            backgroundColor:'#2f2f2f',
            padding:'10px 0px',
            boxShadow:'none',

        }}
        >

        <Toolbar>

        <div className="Header_logo">
            <div className="font-righteous"> The Venue </div>
            <div className="header-logo-title">Musical Events</div>
        </div>

        <IconButton
        aria-label="Menu"
        
        >
            <MenuIcon  style={{
            color:'#ffffff',
            alignItems:"flex-end"
        }}/>
        </IconButton>

        </Toolbar>

        </AppBar>
        </>
    )
}

export default Header;