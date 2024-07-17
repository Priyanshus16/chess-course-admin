import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Users from "./Componets/Users";
import Orders from "./Componets/Orders";
import RateList from "./Componets/RateList";
import AddRateList from "./Componets/AddRateList";
import Login from "./Componets/Login";
import AddMilkInward from "./Componets/AddMilkInward";
import MilkInward from "./Componets/MilkInward";
import MilkOutward from "./Componets/MilkOutward";

export default function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>            
            <Route  path="/Users" element={<Users/>}/>            
            <Route  path="/Orders" element={<Orders/>}/>            
            <Route  path="/RateList" element={<RateList/>}/>            
            <Route  path="/AddRateList" element={<AddRateList/>}/>            
            <Route  path="/MilkInward" element={<MilkInward/>}/>            
            <Route  path="/AddMilkInward" element={<AddMilkInward/>}/>    
            <Route  path="/MilkOutward" element={<MilkOutward/>}/>    
             
            {/* <Route  path="/AddAddress" element={<AddAddress/>}/>             */}
            {/* <Route  path="/AddressList" element={<AddressList/>}/>             */}
            {/* <Route  path="/QuantityList" element={<QuantityList/>}/>             */}
            {/* <Route  path="/AddQuantity" element={<AddQuantity/>}/>             */}
            {/* <Route  path="/TimeSlot" element={<TimeSlot/>}/>             */}
            {/* <Route  path="/AddTimeSlot" element={<AddTimeSlot/>}/>             */}
            {/* <Route  path="/OrderCancle" element={<OrderCancle/>}/>             */}
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}
