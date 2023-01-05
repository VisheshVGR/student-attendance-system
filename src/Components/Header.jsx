import React, { useEffect, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
    const [currTime, setCurrTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        setInterval(() => {
            setCurrTime(new Date().toLocaleString())
        }, 1000)
    }, [])
    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar sx={{ background: "#FF5A33" }}>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            <BookIcon sx={{ width: "25px", marginRight: "5px" }} />Student Attendance System
                        </Typography>
                        <Typography variant="body" component="div">
                            {currTime}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header