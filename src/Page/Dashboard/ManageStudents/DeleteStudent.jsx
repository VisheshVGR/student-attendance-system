import React, { useState, useEffect } from "react"
import { db } from "../../../Firebase/Firebase-config";
import { doc, deleteDoc, onSnapshot, collection } from "firebase/firestore";

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteStudent = () => {
    const [pageSize, setPageSize] = useState(5);
    const [studentsData, setStudentsData] = useState([]);

    useEffect(() => {
        const docRef = collection(db, 'student-attendance-system');

        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            let tempData = []
            snapshot.forEach((doc) => {
                tempData.push(doc.data())
            });
            setStudentsData(tempData);
        });

        return (() => {
            unsubscribe();
        })
    }, [])

    const columns = [
        { field: 'id', headerName: 'Roll No.', width: 80 },
        { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
        {
            field: 'delete', headerName: 'Delete', sortable: false, width: 70,
            renderCell: (params) => {
                const docRef = doc(db, 'student-attendance-system', params.row.id);
                const handleStudentDelete = async () => {
                    await deleteDoc(docRef);
                }
                return (
                    <>
                        {
                            <IconButton aria-label="delete" color="error" onClick={handleStudentDelete}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    </>
                )
            },

        },
    ];


    return (
        <>
            <DataGrid
                rows={studentsData}
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

export default DeleteStudent