// src/pages/Departments.jsx
import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import DepartmentCard from "../components/DepartmentCard";
import comp from "../assets/computer.avif";
import data from "../assets/dataScience.jpg";
import ai from "../assets/ai.jpg";
import mech from "../assets/mech.jpg";
import civil from "../assets/civil.jpg";
import Electrical from "../assets/Electrical.jpg";
import arch from "../assets/arch.jpg";
const Departments = () => {
const departmentData = [
  {
    name: "Computer Engineering",
    image: comp,
    description:
      "Prepares students for careers in software development, networking, and AI systems with strong foundations in algorithms and programming.",
  },
  {
    name: "Data Science Engineering",
    image: data,
    description:
      "Equips learners with advanced analytics, machine learning, and data visualization skills to extract insights from complex datasets.",
  },
  {
    name: "Artificial Intelligence Engineering",
    image: ai,
    description:
      "Focuses on AI-driven innovation including deep learning, NLP, robotics, and intelligent automation to build smart systems.",
  },
  {
    name: "Mechanical Engineering",
    image: mech,
    description:
      "Deals with design, analysis, and manufacturing of mechanical systems with applications in robotics, automotive, and energy sectors.",
  },
  {
    name: "Civil Engineering",
    image: civil,
    description:
      "Covers construction, structural analysis, and sustainable design for infrastructure like bridges, roads, and smart cities.",
  },
  {
    name: "Electronics & Telecommunication",
    image:Electrical ,
    description:
      "Emphasizes embedded systems, VLSI, IoT, and modern communication networks essential for connected technologies.",
  },
  {
    name: "Architecture",
    image:arch,
    description:
      "Blends creativity and technology to design sustainable buildings and environments that improve quality of life.",
  },
];


  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        color="primary"
      >
        Our Departments
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {departmentData.map((dept, index) => (
          <Grid item key={index}>
            <DepartmentCard
              name={dept.name}
              image={dept.image}
              description={dept.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Departments;
