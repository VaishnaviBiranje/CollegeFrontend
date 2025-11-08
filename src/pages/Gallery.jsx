

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const Gallery = () => {
  const images = [
    { src: "/assets/campus1.jpg", title: "Main Campus" },
    { src: "/assets/campus2.jpg", title: "College Building" },
    { src: "/assets/lab1.jpg", title: "AI & ML Lab" },
    { src: "/assets/lab2.jpg", title: "Mechanical Workshop" },
    { src: "/assets/event1.jpg", title: "Tech Fest" },
    { src: "/assets/event2.jpg", title: "Cultural Event" },
    { src: "/assets/library.jpg", title: "Central Library" },
    { src: "/assets/ground.jpg", title: "Play Ground" },
    { src: "/assets/auditorium.jpg", title: "Auditorium" },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8fafc" }}>
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
            College Gallery
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            mb={6}
          >
            Explore the vibrant campus life, modern infrastructure, and
            inspiring events at our college.
          </Typography>
        </motion.div>

        {/* Gallery Grid */}
        <ImageList variant="masonry" cols={3} gap={16}>
          {images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <ImageListItem>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                    transition: "0.3s",
                  }}
                />
              </ImageListItem>
            </motion.div>
          ))}
        </ImageList>

        {/* Lightbox Popup */}
          {isOpen && (
  <Lightbox
    open={isOpen}
    close={() => setIsOpen(false)}
    slides={images.map((img) => ({ src: img.src }))}
    index={photoIndex}
    on={{
      view: ({ index }) => setPhotoIndex(index),
    }}
  />
)}

      </Container>
    </Box>
  );
};

export default Gallery;
