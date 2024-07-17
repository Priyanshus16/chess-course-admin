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
export default function MilkInward() {
  const navigate = useNavigate();
  // const checklogin = localStorage.getItem('login');
  // if(!checklogin){
  //   navigate('/');
  // }
  const [Data, setData] = useState([
    {
      "date": "2024-07-16",
      "fullName": "Rajesh Kumar",
      "fat":3,
      "litre":10,
      "fatLitre": 30,
      "snf": 8.5,
      "milk": "Cow Milk",
      "morning": 10,
      "evening": 8
    },
    {
      "date": "2024-07-17",
      "fullName": "Sunita Devi",
      "fat":4,
      "litre":10,
      "fatLitre": 40,
      "snf": 8.8,
      "milk": "Buffalo Milk",
      "morning": 12,
      "evening": 9
    },
    {
      "date": "2024-07-18",
      "fullName": "Amit Sharma",
      "fat":3,
      "litre":10,
      "fatLitre": 30,
      "snf": 8.6,
      "milk": "Cow Milk",
      "morning": 9,
      "evening": 7
    },
    {
      "date": "2024-07-19",
      "fullName": "Neha Gupta",
      "fat":5,
      "litre":10,
      "fatLitre": 50,
      "snf": 8.7,
      "milk": "Buffalo Milk",
      "morning": 11,
      "evening": 10
    },
    {
      "date": "2024-07-20",
      "fullName": "Vikram Singh",
      "fat":3,
      "litre":10,
      "fatLitre": 3.7,
      "snf": 8.5,
      "milk": "Cow Milk",
      "morning": 8,
      "evening": 6
    }
  ]
  );

  console.log(Data)

  // const [open, setOpen] = React.useState(false);
  const [deleteitem, setdeleteitem] = React.useState("");
  let i = 0;

  const handleClick=()=>{
    navigate('/AddMilkInward')
  }

  // // ---delete Code----
  // const handleclose = () => {
  //   setOpen(false);
  // };

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm("Are you sure you want to delete this user?");
//     if (confirmed) {
//       try {
//         await axios.delete(`http://localhost:4000/users/${id}`);
//         setData(Data.filter((user) => user._id !== id));
//         alert("User deleted successfully");
//       } catch (error) {
//         console.error("Error deleting user:", error);
//         alert("Error deleting user");
//       }
//     }
//   };

//   const getData = async () => {
//     await axios
//       .get(
//         "http://localhost:4000/users"
//       )
//       .then((res) => {
//         setData(res.data);
//       });
//   };
  

//   useEffect(() => {
//     getData();
//   }, []);
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "#F5F5F5", height: "97vh" }}
      >
        <Toolbar />
        
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
                  Milk Inward
                </TableCell>
              </TableRow>
            </TableHead>

            {/* second row */}

            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={5}
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "0px",
                    letterSpacing: "0em",
                  }}
                >
                  <Button variant="outlined" 
                  onClick={handleClick}
                  > Add </Button>
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
                  Dates
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
                  Full Name
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
                  Fat
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
                  Litre
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
                  Fat Litre
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
                  SNF
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
                  Milk
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
                  Morning (in Litre)
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
                  Evening (in Litre)
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
                {/* <TableCell align="center" sx={{ width: "150px" }}>
                  {i}
                </TableCell> */}
                <TableCell align="center">
                  {/* {user.username} */}
                  {user.date}
                </TableCell>
                
                <TableCell align="center">
                  {/* {user.email} */}
                  {user.fullName}
                </TableCell>
                <TableCell align="center">
                  {/* {user.email} */}
                  {user.fat}
                </TableCell>
                <TableCell align="center">
                  {/* {user.email} */}
                  {user.litre}
                </TableCell>
                <TableCell align="center">
                  {/* {user.password} */}
                  {user.fatLitre}

                </TableCell>
                <TableCell align="center">
                  {/* {user.password} */}
                  {user.snf}

                </TableCell>
                <TableCell align="center">
                  {/* {user.password} */}
                  {user.milk}

                </TableCell>
                <TableCell align="center">
                  {/* {user.password} */}
                  {user.morning}

                </TableCell>
                <TableCell align="center">
                  {/* {user.password} */}
                  {user.evening}

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

          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
}
