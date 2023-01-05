import React, { useState } from "react"

import AddStudent from "./AddStudent"
import DeleteStudent from "./DeleteStudent"

import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const ManageStudents = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [manageStudentDialog, setManageStudentDialog] = useState(false);
    const [tabValue, setTabValue] = useState('1');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleManageStudentDialogOpen = () => {
        setManageStudentDialog(true);
    };

    const handleManageStudentDialogClose = () => {
        setManageStudentDialog(false);
    };

    return (
        <>
            <Fab sx={{
                position: "fixed",
                right: "0",
                bottom: "0",
                marginRight: "50px",
                marginBottom: "50px",
                backgroundColor: "#B4CF66"
            }}
                onClick={handleManageStudentDialogOpen}
            >
                <ManageAccountsIcon />
            </Fab>

            <Dialog
                fullScreen={fullScreen}
                open={manageStudentDialog}
                onClose={handleManageStudentDialogClose}
                aria-labelledby="Manage Students"
            >
                <DialogTitle id="responsive-dialog-title" sx={{ background: "#FF5A33", color: "white" }}>
                    {"Manage Students"}
                </DialogTitle>
                <DialogContent>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="wrapped label tabs example"
                        sx={{ marginBottom: 3 }}
                        variant="fullWidth"
                    >
                        <Tab
                            value="1"
                            label="Add Student"
                        />
                        <Tab value="2" label="Delete Student" />
                    </Tabs>
                    {
                        tabValue === "1" && <AddStudent />
                    }
                    {
                        tabValue === "2" && <DeleteStudent />
                    }
                </DialogContent>
                <DialogActions sx={{ backgroundColor: "#44803F" }}>
                    <Button variant="contained" color="error" onClick={handleManageStudentDialogClose} autoFocus sx={{background:"white", color:"black"}}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default ManageStudents