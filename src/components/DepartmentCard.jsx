// src/components/DepartmentCard.jsx
import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const DepartmentCard = ({ image, name, description }) => {
  return (
<Card
  sx={{
    width: 320,
    height: 380,
    borderRadius: 4,
    boxShadow: 4,
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    "&:hover": { transform: "scale(1.05)", boxShadow: 8 },
  }}
>
  <CardMedia component="img" height="180" image={image} alt={name} />
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </CardContent>
</Card>

  );
};

export default DepartmentCard;
