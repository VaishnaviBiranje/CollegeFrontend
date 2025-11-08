import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ScienceIcon from "@mui/icons-material/Science";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Footer from "../components/Footer";
import StarPerformers from "../components/StarPerformers";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      {/* ---------- Hero Section ---------- */}
      <Box
  sx={{
    height: { xs: "70vh", md: "85vh" },
    backgroundImage:  '/student/college.png', // use your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.55)", // dark overlay
      backdropFilter: "blur(2px)", // smooth blur
      zIndex: 1,
    },
  }}
>
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    style={{ textAlign: "center", zIndex: 2 }}
  >
    <Typography variant="h3" fontWeight="bold">
      D.Y. Patil College of Engineering & Technology
    </Typography>
    <Typography variant="h6" sx={{ mt: 2, mb: 3 }}>
      Accredited by NAAC | Affiliated to Shivaji University | Empowering Engineers of Tomorrow
    </Typography>
    <Button
      variant="contained"
      component={Link}
      to="/about"
      sx={{
        backgroundColor: "#64ffda",
        color: "#0a192f",
        fontWeight: "bold",
        "&:hover": { backgroundColor: "#52e0c4" },
      }}
    >
      Explore More
    </Button>
  </motion.div>
</Box>
      

      {/* ---------- About Section ---------- */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#0a192f" }}
          >
            About Our Institution
          </Typography>
          <Typography
            textAlign="center"
            sx={{ maxWidth: "800px", mx: "auto", color: "#555" }}
          >
            Established in 1984, D.Y. Patil College of Engineering & Technology
            is a premier institution offering quality technical education in
            Maharashtra. We focus on holistic student development through
            innovation, research, and values-based education.
          </Typography>
        </motion.div>
      </Container>

      {/* ---------- Why Choose Us Section ---------- */}
      <Box sx={{ py: 8, backgroundColor: "#0a192f", color: "#64ffda" }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Why Choose DYP College?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                icon: <StarIcon sx={{ fontSize: 40 }} />,
                title: "Accredited Excellence",
                desc: "NAAC accredited institution ensuring top-notch education and infrastructure.",
              },
              {
                icon: <GroupsIcon sx={{ fontSize: 40 }} />,
                title: "Expert Faculty",
                desc: "Experienced and dedicated teaching staff shaping the future of students.",
              },
              {
                icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />,
                title: "Industry Collaboration",
                desc: "Strong partnerships with industries offering training and placements.",
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card
                  sx={{
                    backgroundColor: "#112240",
                    color: "#64ffda",
                    textAlign: "center",
                    borderRadius: "20px",
                    p: 2,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  <CardContent>
                    {item.icon}
                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "#a8b2d1" }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ---------- Department Preview ---------- */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#0a192f" }}
        >
          Our Departments
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {[
            {
              name: "Computer Engineering",
              icon: <EngineeringIcon />,
            },
            {
              name: "Electronics & Telecommunication",
              icon: <ScienceIcon />,
            },
            {
              name: "Civil Engineering",
              icon: <ArchitectureIcon />,
            },
          ].map((dept, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  boxShadow: 3,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    transition: "0.3s",
                  },
                }}
              >
                <CardContent>
                  {dept.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {dept.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* add my content */}
      {/* ---------- Our Star Performers Section ---------- */}
      <StarPerformers/>
      <Footer/>

    </Box>
  );
};

export default Home;
