import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    TextField,
    Typography,
    Button,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Backend-connected submit handler
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        // Check HTTP status instead of 'data.success'
        if (res.ok) {
            alert("✅ Message submitted successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
            alert("❌ Something went wrong. Please try again!");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("⚠️ Server error. Please check backend connection!");
    }
};



    return (
        <Box sx={{ py: 8, backgroundColor: "#f9fafb" }}>
            <Container>
                {/* Page Title */}
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
                        Contact Us
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        mb={6}
                    >
                        Get in touch with us for any queries, admissions, or feedback
                    </Typography>
                </motion.div>

                {/* Two Column Layout */}
                <Grid container spacing={4}>
                    {/* Contact Form */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{ p: 4, borderRadius: 3, backgroundColor: "#fff" }}
                        >
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        mt: 2,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 3,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "#1565c0",
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Paper>
                    </Grid>

                    {/* College Info + Map */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                height: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Address */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    backgroundColor: "#fff",
                                    flexShrink: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        mb: 1,
                                    }}
                                >
                                    <LocationOn color="primary" />
                                    <Typography variant="h6" fontWeight="bold">
                                        Address
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    D. Y. Patil College Of Engineering & Technology, Kasba
                                    Bawada, Kolhapur, Maharashtra, India
                                </Typography>
                            </Paper>

                            {/* Contact */}
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    backgroundColor: "#fff",
                                    flexShrink: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        mb: 1,
                                    }}
                                >
                                    <Phone color="primary" />
                                    <Typography variant="h6" fontWeight="bold">
                                        Phone
                                    </Typography>
                                </Box>
                                <Typography variant="body1">+91 22 1234 5678</Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        mt: 2,
                                    }}
                                >
                                    <Email color="primary" />
                                    <Typography variant="h6" fontWeight="bold">
                                        Email
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    info@coek.dypgroup.edu.in
                                </Typography>
                            </Paper>

                            {/* Map */}
                            <Paper
                                elevation={3}
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    flexGrow: 1,
                                }}
                            >
                                <iframe
                                    title="College Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.123456789!2d74.224567!3d16.701234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123456789abcdef%3A0xabcdef1234567890!2sD.%20Y.%20Patil%20College%20Of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
