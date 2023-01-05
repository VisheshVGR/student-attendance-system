import React from "react";
import Box from '@mui/material/Box';
import BookIcon from '@mui/icons-material/Book';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: "#44803F",
                    color: "white",
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <GitHubIcon sx={{cursor:"pointer"}} onClick={() => window.open("https://github.com/VisheshVGR/student-attendance-system")} />

                <p style={{ marginTop: "10px", textAlign: "center" }}>
                    <BookIcon sx={{ height: "10px", marginRight: "-10px" }} /> Student Attendance System<br />2023 &#169; All Rights Reserved
                </p>
            </Box>
        </>
    )
}

export default Footer