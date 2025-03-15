import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  const cloud_name = "dvheeoqcn";

  const ADMIN_API_PREFIX = '/api/v1/admin'

  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    try {
      let imageUrl = "";

      if (formData.image) {
        const imageData = new FormData();
        imageData.append("file", formData.image);
        imageData.append("upload_preset", "chess-course");
        imageData.append("folder","blogs" )

        const cloudinaryRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          imageData
        );
        imageUrl = cloudinaryRes.data.secure_url;
      }

      const finalData = {
        ...formData,
        image: imageUrl,
      };

      console.log(finalData)

      if (
        !finalData.heading ||
        !finalData.description ||
        !finalData.image
      ) {
        return alert("please provide all fields");
      }

      const res = await axios.post(
        `http://localhost:4000${ADMIN_API_PREFIX}/addBlog`,
        finalData
      );
      console.log(res)
      navigate("/blogs");
    } catch (error) {
      console.error(error, "error while sending data");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
    }
    alert("image upload successfully");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Add Blog
        </Typography>

        <form>
          <TextField
            label="Name"
            fullWidth
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            label="Description"
            multiline
            rows={5}
            name="description"
            value={formData.description}
            type="description"
            fullWidth
            onChange={handleChange}
            margin="normal"
          />

          <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
            <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
            <Button variant="contained" component="label">
              Upload Image
              <input onChange={handleFileChange} type="file" hidden />
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddBlog;
