import {
    Box,
    Button,
    FormControl,
    TextField,
    Toolbar,
    Typography,
    InputLabel,
    Select,
    MenuItem,
  } from "@mui/material";
  import React, { useState } from "react";
  import ArrowBackIcon from "@mui/icons-material/ArrowBack";
  import CheckIcon from "@mui/icons-material/Check";
  import axios from "axios";
  import Header from "./Header";
  import { useNavigate } from "react-router-dom";
  
  export default function AddRateList() {
    const navigate = useNavigate();
  
    const [data, setdata] = useState({
      Category: "",
      ItemName: "",
      Price: 0,
    });
    const [age, setAge] = React.useState("");
    const [dataDate, setDataDate] = useState({ date: null });
  
    const handleChangeDropdown = (event) => {
      setAge(event.target.value);
    };
  
    // console.log(data)
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setdata({ ...data, [name]: value });
    };
  
  
    const handleClickfun = async () => {
      console.log("->", data);
      // await axios
      //   .post("https://kabadiwala.cyclic.app/addRateList",data)
      //   .then((res) => {
      //     const { message } = res.data;
      //     alert(message);
      //     setdata({
      //       Category: "",
      //       ItemName: "",
      //       Price: 0,
      //     })
      //   }).catch((err)=>{
      //       console.log(err);
      //   });
  
      navigate("/AddMilkoutward", { state: { data } });
    };
  
    return (
      <>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#F5F5F5" }}>
          <Toolbar />
          {/* <Typography
              variant="h4"
              sx={{
                color: "#4F5256",
                fontWeight: 700,
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              Rate Management
            </Typography> */}
  
          <Box
            sx={{
              marginLeft: "50px",
              marginRight: "50px",
              width: "auto",
              height: "auto",
              marginTop: "20px",
              background: "#FFFFFF",
            }}
          >
            {/* <Typography
                variant="h4"
                sx={{
                  fontSize: "35px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  fontFamily: "Roboto",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                Add Rate 
              </Typography> */}
            <Typography
              sx={{ width: "100%", border: "1px solid #F0F0F0" }}
            ></Typography>
            <Typography
              variant="h4"
              sx={{
                padding: "20px",
                color: "#4F5256",
                fontSize: "30px",
                fontWeight: 700,
              }}
            >
              Detail
            </Typography>
            <Typography
              sx={{ width: "100%", border: "1px solid #F0F0F0" }}
            ></Typography>
  
            <FormControl
              sx={{
                paddingLeft: "50px",
                paddingRight: "50px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6" sx={{ padding: "15px", color: "#4F5256" }}>
                User Name
              </Typography>
              <Select
                sx={{ width: "75%" }}
                name="Category"
                value={data.Category}
                onChange={(e) => handleChange(e)}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Select User</em>
                </MenuItem>
                <MenuItem value="Cow Milk">Cow Milk</MenuItem>
                <MenuItem value="Buffalo Milk">Buffalo Milk</MenuItem>
              </Select>
            </FormControl>
  
            <FormControl
              sx={{
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6" sx={{ padding: "15px", color: "#4F5256" }}>
                Price
              </Typography>
              <TextField
                sx={{ width: "75%" }}
                placeholder="ex. 20 30 40 50 60"
                name="Price"
                type="tel"
                value={data.Price === 0 ? null : data.Price}
                onChange={(e) => handleChange(e)}
              ></TextField>
            </FormControl>
  
            <FormControl
              sx={{
                padding: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => navigate("/RateList")}
                size="large"
                variant="outlined"
                sx={{ bgcolor: "#fff", marginRight: "10px", color: "#000" }}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              <Button
                size="large"
                variant="outlined"
                sx={{ bgcolor: "#4CAF50", color: "#fff" }}
                startIcon={<CheckIcon />}
                onClick={() => handleClickfun()}
              >
                Submit
              </Button>
            </FormControl>
          </Box>
        </Box>
      </>
    );
  }
  