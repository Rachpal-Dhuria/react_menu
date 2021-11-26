import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Icon,   } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';





const Header = () => {

    const [drwaerOpen,setDrawerOpen] = useState(false)
    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }

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

        <div className="header_logo">
            <div className="font_righteous header_logo_venue"> The Venue </div>
            <div className="header_logo_title">Musical Events</div>
        </div>

        <IconButton
        aria-label="Menu"
        onClick={()=> toggleDrawer(true)}
        
        >
            <MenuIcon  style={{
            color:'#ffffff',    
            alignItems:"flex-end"
        }}/>
        </IconButton>

        <Sidebar open={drwaerOpen} onClose={(value)=> toggleDrawer(value)}        />

        </Toolbar>

        </AppBar>
        </>
    )
}

export default Header;