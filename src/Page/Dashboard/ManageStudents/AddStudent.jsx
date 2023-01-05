import React, { useState } from "react"
import { db } from "../../../Firebase/Firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AddStudent = () => {
    const [rollNo, setRollNo] = useState(0);
    const [name, setName] = useState("");

    const handleStudentAdd = async (e) => {
        e.preventDefault();
        
        const docRef = doc(db, 'student-attendance-system', rollNo);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            alert("Student already exists");
        } else {
            const student_data = {
                id: rollNo,
                name: name,
                check_in: {},
                check_out: {},
            }
            await setDoc(docRef, student_data);
        }
    }
    return (
        <>
            <Box component="form" onSubmit={handleStudentAdd} noValidate >

                <Stack spacing={3}>
                    <TextField fullWidth label="Roll No." variant="outlined" type="number" value={rollNo} onChange={e => setRollNo(e.target.value)} />
                    <TextField fullWidth label="Full Name" variant="outlined" type="text" value={name} onChange={e => setName(e.target.value)} />
                    <Button variant="contained" color="success" type="submit" onClick={handleStudentAdd}>Add</Button>
                </Stack>
            </Box>
        </>
    )
}

export default AddStudent