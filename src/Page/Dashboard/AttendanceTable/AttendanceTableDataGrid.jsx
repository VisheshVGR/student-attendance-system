import React, { useState } from "react"
import { db } from "../../../Firebase/Firebase-config";
import { doc, updateDoc } from "firebase/firestore";

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';

const AttendanceTableDataGrid = ({ attendanceData, dataForDate }) => {
    const [pageSize, setPageSize] = useState(5);


    const columns = [
        { field: 'id', headerName: 'Roll No.', width: 80 },
        { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
        {
            field: 'check_in', headerName: 'Check In', width: 100,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.check_in[dataForDate] ?
                                params.row.check_in[dataForDate] :
                                "-"
                        }
                    </>
                )
            },

        },
        {
            field: 'check_out', headerName: 'Check Out', width: 100,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.check_out[dataForDate] ?
                                params.row.check_out[dataForDate] :
                                "-"
                        }
                    </>
                )
            },

        },
        {
            field: 'status', headerName: 'Status', sortable: false, width: 100,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.check_in[dataForDate] ?
                                <Chip label="Present" color="success" /> :
                                <Chip label="Absent" color="error" />
                        }
                    </>
                )
            },

        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            sortable: false,
            renderCell: (params) => {
                const docRef = doc(db, 'student-attendance-system', params.row.id);

                const handleCheckIn = async () => {
                    await updateDoc(docRef, {
                        check_in: {
                            ...params.row.check_in,
                            [dataForDate]: (new Date()).toLocaleTimeString()
                        }
                    })
                }

                const handleCheckOut = async () => {
                    await updateDoc(docRef, {
                        check_out: {
                            ...params.row.check_out,
                            [dataForDate]: (new Date()).toLocaleTimeString()
                        }
                    })
                }

                const handleReset = async () => {
                    delete params.row.check_out[dataForDate];
                    delete params.row.check_in[dataForDate];

                    await updateDoc(docRef, {
                        check_out: params.row.check_out,
                        check_in: params.row.check_in,
                    })
                }

                return (
                    <>
                        {
                            !params.row.check_in[dataForDate] && !params.row.check_out[dataForDate] &&
                            <>
                                <Chip onClick={handleCheckIn} color="success" label="Check In" />
                            </>
                        }
                        {
                            params.row.check_in[dataForDate] && !params.row.check_out[dataForDate] &&
                            <>
                                <Chip onClick={handleCheckOut} color="warning" label="Check Out" />
                            </>
                        }
                        {
                            params.row.check_in[dataForDate] && params.row.check_out[dataForDate] &&
                            <>
                                <Chip onClick={handleReset} color="primary" label="Reset" />
                            </>
                        }
                    </>
                )

            },
        },

    ];


    return (
        <>
            <DataGrid
                rows={attendanceData}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                rowsPerPageOptions={[5, 10, 20, 50]}
                disableSelectionOnClick
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                autoHeight
                components={{
                    Toolbar: GridToolbar,
                }}
                componentsProps={{
                    toolbar: { showQuickFilter: true },
                }}
            />
        </>
    )
}

export default AttendanceTableDataGrid