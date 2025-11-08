import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, Email } from "@mui/icons-material";

const Faculties = () => {
  const departments = [
    {
      name: "Computer Engineering",
      faculty: [
        {
          name: "Dr. Raddheka Dhanal",
          role: "Head of Department",
          image: "https://coek.dypgroup.edu.in/wp-content/uploads/2020/10/Radhika-Dhanal-1024x1022.jpg",
          email: "RaddhekaDhanal@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. K.T.Mane",
          role: "Assistant Professor",
          image: "https://yt3.googleusercontent.com/ytc/AIdro_ngJ8o7P6jEAZCX2v6mY1MzZxwTq4QndlvjXleht8hWomw=s900-c-k-c0x00ffffff-no-rj",
          email: "kishor.mane@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Shobha Patil",
          role: "Associate Professor",
          image: "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Shobha-Patil.jpg",
          email: "Shobha Patil@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. kapil kadam",
          role: "Assistant Professor",
          image: "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/Kapil-Kadam.jpg",
          email: "kapil.kadam@college.edu",
          linkedin: "https://linkedin.com",
        },
      ],
    },
    {
      name: "Artificial Intelligence & Data Science",
      faculty: [
        {
          name: "Dr. Meera Joshi",
          role: "Head of Department",
          image: "/assets/faculty5.jpg",
          email: "meera.joshi@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Neha Gaikwad",
          role: "Assistant Professor",
          image: "/assets/faculty6.jpg",
          email: "neha.gaikwad@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Kiran Pawar",
          role: "Associate Professor",
          image: "/assets/faculty7.jpg",
          email: "kiran.pawar@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Rutuja Deshpande",
          role: "Assistant Professor",
          image: "/assets/faculty8.jpg",
          email: "rutuja.deshpande@college.edu",
          linkedin: "https://linkedin.com",
        },
      ],
    },
    {
      name: "Mechanical Engineering",
      faculty: [
        {
          name: "Dr. Suresh Patil",
          role: "Head of Department",
          image: "/assets/faculty9.jpg",
          email: "suresh.patil@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Ajay More",
          role: "Assistant Professor",
          image: "/assets/faculty10.jpg",
          email: "ajay.more@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Sheetal Ghorpade",
          role: "Associate Professor",
          image: "/assets/faculty11.jpg",
          email: "sheetal.ghorpade@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Nikhil Jadhav",
          role: "Assistant Professor",
          image: "/assets/faculty12.jpg",
          email: "nikhil.jadhav@college.edu",
          linkedin: "https://linkedin.com",
        },
      ],
    },
    {
      name: "Civil Engineering",
      faculty: [
        {
          name: "Dr. Anil Shinde",
          role: "Head of Department",
          image: "/assets/faculty13.jpg",
          email: "anil.shinde@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Mayuri Kadam",
          role: "Assistant Professor",
          image: "/assets/faculty14.jpg",
          email: "mayuri.kadam@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Rohit Chavan",
          role: "Associate Professor",
          image: "/assets/faculty15.jpg",
          email: "rohit.chavan@college.edu",
          linkedin: "https://linkedin.com",
        },
        {
          name: "Prof. Swati Bhosale",
          role: "Assistant Professor",
          image: "/assets/faculty16.jpg",
          email: "swati.bhosale@college.edu",
          linkedin: "https://linkedin.com",
        },
      ],
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fafb" }}>
      <Container>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
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
            Our Faculties
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="text.secondary"
            mb={6}
          >
            Meet our department-wise team of skilled and inspiring educators.
          </Typography>
        </motion.div>

        {/* Department Sections */}
        {departments.map((dept, i) => (
          <Box key={i} mb={8}>
            <Typography
              variant="h4"
              color="secondary"
              fontWeight="bold"
              mb={4}
              sx={{ borderLeft: "5px solid #1976d2", pl: 2 }}
            >
              {dept.name}
            </Typography>

            <Grid container spacing={4}>
              {dept.faculty.map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        borderRadius: 4,
                        textAlign: "center",
                        p: 2,
                        boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
                        transition: "0.3s",
                        "&:hover": { transform: "translateY(-10px)" },
                      }}
                    >
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          margin: "0 auto",
                          border: "3px solid #1976d2",
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" mt={2}>
                          {member.name}
                        </Typography>
                        <Typography variant="subtitle2" color="primary" mb={1}>
                          {member.role}
                        </Typography>

                        <Box>
                          <IconButton
                            component="a"
                            href={`mailto:${member.email}`}
                            sx={{ color: "#555" }}
                          >
                            <Email />
                          </IconButton>
                          <IconButton
                            component="a"
                            href={member.linkedin}
                            target="_blank"
                            sx={{ color: "#0a66c2" }}
                          >
                            <LinkedIn />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Faculties;
