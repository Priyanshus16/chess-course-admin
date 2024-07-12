import React, { useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//icons
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
export default function Dashboad() {
  const navigate = useNavigate();
  // const checklogin = localStorage.getItem('login');
  // if(!checklogin){
  //   navigate('/');
  // }
  const [Data, setData] = useState([
    { id: 1, username: "Priyanshu", Number: 799730281, Email: 'abc@gmail.com', address: "palasia", aadhar: 228102730011, quantity: 10 },
    { id: 2, username: "Priyansh", Number: 79973021, Email: 'abcd@gmail.com', address: "paalasia", aadhar: 2281027300, quantity: 20 },
    { id: 3, username: "Priyanshu", Number: 799730282, Email: 'abcde@gmail.com', address: "palasiaaa", aadhar: 2281027301, quantity: 30 }

  ]);

  const [open, setOpen] = React.useState(false);
  const [deleteitem, setdeleteitem] = React.useState("");
  let i = 0;
  // // ---delete Code----
  // const handleclose = () => {
  //   setOpen(false);
  // };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    setOpen(true);
    if(confirmed)
    setData(Data.filter((Data) => Data.id !== id));
  };

  const confirmDelete = async (id) => {
    // await axios
    //   .delete(
    //     `https://kabadiwala.cyclic.app/deleteUser/${id}`
    //   )
    //   .then((res) => {
    //     setOpen(false);
    //    getData();
    //    alert(res.data.message);
    //   });
  };

  // const getData = async () => {
  //   await axios
  //     .get(
  //       "https://kabadiwala.cyclic.app/getAllUser"
  //     )
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "#F5F5F5", height: "97vh" }}
      >
        <Toolbar />
        <Typography
          variant="h4"
          sx={{ fontSize: "20px", color: "#6945FF", textAlign: "center" }}
        >
          User Program
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            {/* // first Row */}
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={16}
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  User Management
                </TableCell>
              </TableRow>
            </TableHead>

            {/* // Thrid row */}
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Id
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  User Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Number
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Address
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Aadhar Number
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>

            {Data.map((user) => {
              i = i + 1;
             return ( 
            <TableBody
             key={user.id}
            >
              <TableRow>
                <TableCell align="center" sx={{ width: "150px" }}>
                  {user.id}
                </TableCell>
                <TableCell align="center">
                  {user.username}
                </TableCell>
                <TableCell align="center">
                  {user.Number}
                </TableCell>
                <TableCell align="center">
                  {user.Email}
                </TableCell>
                <TableCell align="center">
                  {user.address}

                </TableCell>
                <TableCell align="center">
                  {user.aadhar}

                </TableCell>
                <TableCell align="center">
                  {user.quantity}

                </TableCell>
                <TableCell align="center">
                  <DeleteIcon
                    className="DeleteIcon"
                  onClick={() =>
                    handleDelete(user.id)
                  }
                  />
                </TableCell>
              </TableRow>
            </TableBody>
           ); 
          })} 
          </Table>
        </TableContainer>


        <Dialog
          // open={open}
          // onClose={handleclose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure ?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your will not be able to recover this imaginary file!
            </DialogContentText>

            {/* <DialogActions>
              <Button
              onClick={() => setOpen(false)}
              >cancel</Button>
              <Button
                onClick={() => confirmDelete(deleteitem)}
              >
                Yes, delete it!
              </Button>
            </DialogActions> */}
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
}
