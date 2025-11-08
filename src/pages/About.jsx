// src/pages/About.jsx
import React from "react";
import { Box, Container, Grid, Typography, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";
import dypImage from "../assets/dyp.jpg";

const About = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)",
        py: 10,
        minHeight: "100vh",
      }}
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            About <span style={{ color: "#1565c0" }}>Our College</span>
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="text.secondary"
            mb={6}
          >
            A legacy of excellence in engineering, innovation, and transformation.
          </Typography>
        </motion.div>

        {/* Main About Section */}
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <motion.img
              src={dypImage}
              alt="Our College"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Welcome to D.Y. Patil College of Engineering
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Established with the goal of nurturing young minds into competent professionals, 
                our college stands tall as a beacon of excellence in education and innovation.
                We empower students with cutting-edge technical knowledge, modern laboratories, 
                and opportunities for global exposure.
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={3}>
                Our campus thrives on creativity, diversity, and inclusivity — 
                helping students grow into future-ready engineers who can solve 
                tomorrow’s problems with innovation and empathy.
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: 3 }}
              >
                Explore More
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        {/* Mission & Vision */}
        <Box sx={{ mt: 10 }}>
          <Divider sx={{ mb: 6 }} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="h5" color="primary" fontWeight="bold">
                  🎯 Our Mission
                </Typography>
                <Typography variant="body1" mt={1} color="text.secondary">
                  To provide value-based technical education and foster innovation, 
                  research, and leadership skills that help shape a sustainable and progressive society.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="h5" color="primary" fontWeight="bold">
                  🌟 Our Vision
                </Typography>
                <Typography variant="body1" mt={1} color="text.secondary">
                  To become a globally recognized institution in engineering education 
                  that nurtures innovation, ethical values, and social responsibility 
                  for a better tomorrow.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
