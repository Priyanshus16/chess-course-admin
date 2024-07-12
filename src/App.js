import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Dashboard from "./Componets/Dashboard";
import Orders from "./Componets/Orders";
import RateList from "./Componets/RateList";
import AddRateList from "./Componets/AddRateList";
import AddQuantity from './Componets/AddQuanity'
import AddTimeSlot from './Componets/AddTimeSlot'
import Login from "./Componets/Login";
import OrderCancle from "./Componets/OrderCancle";

export default function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>            
            <Route  path="/Users" element={<Dashboard/>}/>            
            <Route  path="/Orders" element={<Orders/>}/>            
            <Route  path="/RateList" element={<RateList/>}/>            
            <Route  path="/AddRateList" element={<AddRateList/>}/>            
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
