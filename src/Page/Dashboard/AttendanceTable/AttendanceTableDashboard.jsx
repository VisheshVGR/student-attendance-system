import React, { useState } from "react";

import DateComp from "./DateComp";
import AttendanceTable from "./AttendanceTable"

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';


const AttendanceTableDashboard = () => {
    const [dataForDate, setDataForDate] = useState((new Date()).toDateString());

    return (
        <>
            <Container sx={{ py: 3 }}>
                <Paper sx={{ p: 3 }} elevation={3}>
                    <DateComp dataForDate={dataForDate} setDataForDate={setDataForDate} />
                    <AttendanceTable dataForDate={dataForDate} />
                </Paper>
            </Container>
        </>
    )
}

export default AttendanceTableDashboard