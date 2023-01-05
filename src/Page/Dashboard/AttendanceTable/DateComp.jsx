import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Grid from '@mui/material/Grid';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const DateComp = ({ dataForDate, setDataForDate }) => {
    const [value, setValue] = useState(dayjs(dataForDate));

    useEffect(() => {
        setDataForDate(new Date(value).toDateString());
    }, [setDataForDate, value])

    const IncrementDate = () => {
        setValue(new Date(Number(new Date(value)) + 864e5));
    }

    const DecrementDate = () => {
        setValue(new Date(Number(new Date(value)) - 864e5));
    }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container spacing={2} direction="row" justifyContent="space-evenly" alignItems="center">
                    <Grid item >
                        <Typography align="center" variant="h5" component="p">Data for date : </Typography>
                    </Grid>
                    <Grid item >
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ margin: "0 auto" }}>
                            <Button onClick={DecrementDate}><ArrowCircleLeftIcon /></Button>
                            <Box>
                                <DatePicker
                                    disableFuture
                                    views={['year', 'month', 'day']}
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Box>
                            <Button onClick={IncrementDate} disabled={new Date(value).toDateString() === new Date().toDateString() ? true : false}><ArrowCircleRightIcon /></Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </LocalizationProvider>

        </>
    )
}

export default DateComp;