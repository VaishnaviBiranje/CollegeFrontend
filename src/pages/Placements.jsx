// src/pages/Placements.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const Placements = () => {
  // Company logos (place these files inside public/comp/)
  const companies = [
    { name: "TCS", logo: "/comp/tcs.jpg" },
    { name: "Infosys", logo: "/comp/info.jpeg" },
    { name: "Wipro", logo: "/comp/wipro.jpeg" },
    { name: "Capgemini", logo: "/comp/capgemini.png" },
    { name: "Cognizant", logo: "/comp/cognizant.jpeg" },
    { name: "Tech Mahindra", logo: "/comp/techm.png" },
  ];

  const stats = [
    { number: "250+", label: "Students Placed" },
    { number: "120+", label: "Companies Visited" },
    { number: "60 LPA", label: "Highest Package" },
    { number: "5 LPA", label: "Average Package" },
  ];

  // Student cards — use square, high-res images in public/student/
  const students = [
    {
      name: "Priya Patil",
      company: "TCS",
      image: "/student/stu4.avif",
      quote: "The training and guidance from faculty helped me crack my dream company.",
    },
    {
      name: "Rohit Deshmukh",
      company: "Infosys",
      image: "/student/stu4.avif",
      quote: "Practical learning and placement sessions were really helpful.",
    },
    {
      name: "Sneha Joshi",
      company: "Wipro",
      image: "/student/stu4.avif",
      quote: "DYPCOE provided me the platform to explore my potential and succeed.",
    },
    {
      name: "Anamika Dakre",
      company: "Adobe",
      image: "/student/stu4.avif",
      quote: "Hard work and proper guidance is key to success.",
    },
    {
      name: "Rahul Patil",
      company: "Capgemini",
      image: "/student/stu4.avif",
      quote: "Great mentors and a collaborative environment helped me grow.",
    },
    {
      name: "Snehal Deshmukh",
      company: "Cognizant",
      image: "/student/stu4.avif",
      quote: "The project-based learning prepared me for real interviews.",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fafb" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" align="center" fontWeight="bold" color="primary" gutterBottom>
            Placement Highlights
          </Typography>
          <Typography variant="subtitle1" textAlign="center" color="text.secondary" mb={6}>
            Empowering students to achieve success in top global companies.
          </Typography>
        </motion.div>

        {/* Statistics */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          {stats.map((item, i) => (
            <Grid item xs={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    textAlign: "center",
                    background: "#fff",
                  }}
                >
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    {item.number}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Company Logos */}
        <Typography variant="h5" align="center" fontWeight="bold" color="primary" mb={3}>
          Our Top Recruiters
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          {companies.map((c, idx) => (
            <Grid item key={idx}>
              <motion.div whileHover={{ scale: 1.05 }} style={{ width: 120 }}>
                <Paper
                  elevation={2}
                  sx={{
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    p: 1.25,
                    background: "#ffffff",
                  }}
                >
                  <Box
                    component="img"
                    src={c.logo}
                    alt={c.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Paper>
                <Typography variant="caption" display="block" textAlign="center" mt={1}>
                  {c.name}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>


          {/* Star Performers Section */}
<Typography
  variant="h5"
  align="center"
  fontWeight="bold"
  color="primary"
  mb={3}
>
  Our Star Performers
</Typography>

<Grid
  container
  spacing={4}
  justifyContent="center"
  alignItems="center"
>
  {[
    {
      name: "Priya Patil",
      company: "TCS",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
      quote:
        "The training and guidance from faculty helped me crack my dream company.",
    },
    {
      name: "Rohit Deshmukh",
      company: "Infosys",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
      quote: "Practical learning and placement sessions were really helpful.",
    },
    {
      name: "Sneha Joshi",
      company: "Wipro",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      quote:
        "DYPCOE provided me the platform to explore my potential and succeed.",
    },
    {
      name: "Anamika Dakre",
      company: "Adobe",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
      quote: "Hard work and proper guidance is key to success.",
    },
    {
      name: "Rahul Patil",
      company: "Capgemini",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      quote:
        "Great mentors and a collaborative environment helped me grow.",
    },
    {
      name: "Snehal Deshmukh",
      company: "Cognizant",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.mZfBlMsf08h9-xWlqsM8twHaG1?pid=Api&P=0&h=180",
      quote:
        "The project-based learning prepared me for real interviews.",
    },
  ].map((student, index) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={index}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
      >
        <Card
          sx={{
            width: 320, // fixed width
            height: 420, // fixed height for all
            borderRadius: 3,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 6px 22px rgba(10,20,50,0.08)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 12px 30px rgba(10,20,50,0.12)",
            },
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              height: 240, // all images same height
              width: "100%",
              overflow: "hidden",
              backgroundColor: "#f3f4f7",
            }}
          >
            <Box
              component="img"
              src={student.image}
              alt={student.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>

          {/* Text Section */}
          <CardContent
            sx={{
              textAlign: "center",
              p: 2,
              flexGrow: 1,
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              {student.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              sx={{ mb: 1 }}
            >
              {student.company}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
            >
              “{student.quote}”
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  ))}
</Grid>

      </Container>
    </Box>
  );
};

export default Placements;
