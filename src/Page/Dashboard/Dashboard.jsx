import React from "react";


import Box from '@mui/material/Box';
import ManageStudents from "./ManageStudents/ManageStudents";
import AttendanceTableDashboard from "./AttendanceTable/AttendanceTableDashboard";

const Footer = () => {


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <ManageStudents />
                <AttendanceTableDashboard />
            </Box>

        </>
    )
}

export default Footer