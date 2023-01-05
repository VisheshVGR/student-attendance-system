import React, { useState, useEffect } from "react"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Statistics = ({ attendanceData, dataForDate }) => {
    const [present, setPresent] = useState(0);
    const [absent, setAbsent] = useState(0);
    const [currentlyPresent, setCurrentlyPresent] = useState(0);

    useEffect(() => {
        let checkIn = 0;
        attendanceData.forEach((data) => {
            if (data.check_in[dataForDate])
                checkIn++;
        })

        let checkOut = 0;
        attendanceData.forEach((data) => {
            if (data.check_out[dataForDate])
                checkOut++;
        })

        setPresent(checkIn);
        setAbsent(attendanceData.length - checkIn);
        setCurrentlyPresent(checkIn - checkOut);

    }, [attendanceData, dataForDate])


    return (
        <>
            <Accordion sx={{ background: "#FFEC5C" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ display: "flex" }}><AssessmentIcon /> Statistics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Total Students : {attendanceData.length}<br />
                        Present : {present}<br />
                        Absent : {absent}<br />
                        Currently Present : {currentlyPresent}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Statistics;