// import React from "react";
// import { Box, Typography, Grid, Link as MuiLink, IconButton } from "@mui/material";
// import { Facebook, Instagram, Twitter, LinkedIn, Email } from "@mui/icons-material";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         background: "linear-gradient(135deg, #0a192f, #1e3a8a)",
//         color: "white",
//         mt: 8,
//         pt: 8,
//         pb: 4,
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* --- Decorative Wave Top --- */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "-1px",
//           left: 0,
//           right: 0,
//           height: "60px",
//           background:
//             "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)",
//         }}
//       ></Box>

//       <Grid
//         container
//         spacing={4}
//         justifyContent="center"
//         sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}
//       >
//         {/* --- Column 1: About --- */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             My College
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ lineHeight: 1.7, color: "rgba(255,255,255,0.9)" }}
//           >
//             A place where innovation meets excellence. Empowering students to
//             build a brighter future through technology and creativity.
//           </Typography>
//         </Grid>

//         {/* --- Column 2: Quick Links --- */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Quick Links
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//             {["Home", "About", "Departments", "Placements", "Contact"].map(
//               (link, index) => (
//                 <MuiLink
//                   key={index}
//                   href={`#${link.toLowerCase()}`} // ✅ Corrected line
//                   underline="none"
//                   sx={{
//                     color: "rgba(255,255,255,0.9)",
//                     "&:hover": {
//                       color: "#38bdf8",
//                       transform: "translateX(5px)",
//                     },
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   {link}
//                 </MuiLink>
//               )
//             )}
//           </Box>
//         </Grid>

//         {/* --- Column 3: Contact --- */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Contact Us
//           </Typography>
//           <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
//             📍 D.Y. Patil College, Pune
//           </Typography>
//           <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
//             📞 +91 9876543210
//           </Typography>
//           <MuiLink
//             href="mailto:info@mycollege.edu.in"
//             underline="none"
//             sx={{
//               color: "rgba(255,255,255,0.9)",
//               display: "block",
//               mt: 0.5,
//               "&:hover": { color: "#38bdf8" },
//             }}
//           >
//             ✉ info@mycollege.edu.in
//           </MuiLink>
//         </Grid>

//         {/* --- Column 4: Follow Us --- */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Follow Us
//           </Typography>
//           <Box sx={{ display: "flex", gap: 1 }}>
//             {[Facebook, Instagram, Twitter, LinkedIn, Email].map(
//               (Icon, index) => (
//                 <IconButton
//                   key={index}
//                   component="a"
//                   href="#"
//                   aria-label={Icon.name}
//                   sx={{
//                     color: "white",
//                     "&:hover": {
//                       backgroundColor: "rgba(255,255,255,0.08)",
//                       transform: "scale(1.2)",
//                       color: "#38bdf8",
//                     },
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   <Icon />
//                 </IconButton>
//               )
//             )}
//           </Box>
//         </Grid>
//       </Grid>

//       {/* --- Bottom Section --- */}
//       <Box
//         sx={{
//           textAlign: "center",
//           mt: 5,
//           borderTop: "1px solid rgba(255,255,255,0.15)",
//           pt: 2,
//           fontSize: "0.9rem",
//           letterSpacing: "0.5px",
//           color: "rgba(255,255,255,0.8)",
//         }}
//       >
//         © {new Date().getFullYear()} My College | All Rights Reserved 🌟
//       </Box>
//     </Box>
//   );
// };

// export default Footer;


import React from "react";
import { Box, Typography, Grid, Link as MuiLink, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1e3a8a, #0a192f)",
        color: "white",
        mt: 10,
        pt:3,    //5,
        pb:2     // 3,
      }}
    >
      <Grid
        container
        //spacing={4}
        spacing={2}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, sm: 6 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* --- About --- */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            My College
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            A place where innovation meets excellence. Empowering students to
            build a brighter future through technology and creativity.
          </Typography>
        </Grid>

        {/* --- Quick Links --- */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["Home", "About", "Departments", "Placements", "Contact"].map((link, i) => (
              <MuiLink
                key={i}
                href={`#${link.toLowerCase()}`}
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.95rem",
                  "&:hover": {
                    color: "#38bdf8",
                    pl: 0.5,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {link}
              </MuiLink>
            ))}
          </Box>
        </Grid>

        {/* --- Contact --- */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
            📍 D.Y. Patil College, Pune
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
            📞 +91 9876543210
          </Typography>
          <MuiLink
            href="mailto:info@mycollege.edu.in"
            underline="none"
            sx={{
              color: "rgba(255,255,255,0.8)",
              "&:hover": { color: "#38bdf8" },
            }}
          >
            ✉ info@mycollege.edu.in
          </MuiLink>
        </Grid>

        {/* --- Follow Us --- */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 1 }}>
            {[Facebook, Instagram, Twitter, LinkedIn, Email].map((Icon, i) => (
              <IconButton
                key={i}
                component="a"
                href="#"
                aria-label={Icon.name}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#38bdf8",
                    transform: "scale(1.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* --- Bottom Section --- */}
      <Box
        sx={{
          textAlign: "center",
          mt:3,           // 5,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          pt: 1.5,        //2,
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.3px",
        }}
      >
        © {new Date().getFullYear()} My College | All Rights Reserved 🌟
      </Box>
    </Box>
  );
};

export default Footer;