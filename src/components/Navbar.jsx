// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import {
  School,
  Home,
  Info,
  Work,
  Groups,
  Business,
  ContactMail,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: "#0a192f" }}>
      <Toolbar>
        <School sx={{ mr: 1, color: "#64ffda" }} />
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#64ffda" }}>
          My College
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" startIcon={<Info />}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/departments" startIcon={<Business />}>
            Departments
          </Button>
          <Button color="inherit" component={Link} to="/placements" startIcon={<Work />}>
            Placements
          </Button>
          <Button color="inherit" component={Link} to="/faculties" startIcon={<Groups />}>
            Faculties
          </Button>
          <Button color="inherit" component={Link} to="/contact" startIcon={<ContactMail />}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
