import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const performers = [
  {
    name: "Aarav Patil",
    achievement: "National Coding Champion",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Deshmukh",
    achievement: "Best Innovator Award 2025",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Jadhav",
    achievement: "Hackathon Winner",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Vaishnavi Biranje",
    achievement: "Top Project Performer",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Kalyani Ligase",
    achievement: "Full Stack Excellence Award",
    img: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    name: "Prashant Chandanshive",
    achievement: "AI Innovation Award",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const StarPerformers = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        background: "linear-gradient(135deg, #f3f4f6, #e0f7fa)",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        🌟 Our Star Performers 🌟
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          px: 3,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {performers.map((person, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 250,
              maxWidth: 250,
              flex: "0 0 auto",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-8px)" },
            }}
          >
            <Box
              component="img"
              src={person.img}
              alt={person.name}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {person.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {person.achievement}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default StarPerformers;