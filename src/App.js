import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Users from "./Componets/Auth/Users";
import Login from "./Componets/Auth/Login";
import Testimonial from "./Componets/Testimonial/Testimonial";
import Header from "./Componets/Header/Header";
import AddTestimonials from "./Componets/Testimonial/AddTestimonials";
import AddCurriculum from "./Componets/Curriculum/AddCurriculum";
import Curriculum from "./Componets/Curriculum/Curriculum";
import AddBlog from "./Componets/Blog/AddBlog";
import Blog from "./Componets/Blog/Blog";

export default function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Testimonials" element={<Testimonial />} />
            <Route path="/addTestimonials" element={<AddTestimonials />} />
            <Route path="/addCurriculum" element={<AddCurriculum />} />
            <Route path="/Curriculum" element={<Curriculum />} />
            <Route path="/addBlog" element={<AddBlog />} />
            <Route path="/blogs" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}