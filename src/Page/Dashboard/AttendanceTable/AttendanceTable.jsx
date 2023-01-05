import React, { useState, useEffect } from "react"
import Statistics from "./Statistics";
import AttendanceTableDataGrid from "./AttendanceTableDataGrid"
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase-config";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const AttendanceTable = ({ dataForDate }) => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        const docRef = collection(db, 'student-attendance-system');

        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            let tempData = []
            snapshot.forEach((doc) => {
                tempData.push(doc.data())
            });
            setAttendanceData(tempData);
        });

        return (() => {
            unsubscribe();
        })
    }, [])

    return (
        <>
            <Stack spacing={3} sx={{ marginTop: 3, marginBottom: 3 }}>
                <Statistics attendanceData={attendanceData} dataForDate={dataForDate} />
                <Box>
                    <AttendanceTableDataGrid attendanceData={attendanceData} dataForDate={dataForDate} />
                </Box>
            </Stack>
        </>
    )
}

export default AttendanceTable;