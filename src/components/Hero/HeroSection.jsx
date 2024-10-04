import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import heroImage from "../../assets/hero.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        background: "linear-gradient(to right, #002a36, #004d57, #006080)",
        textAlign: "center",
        position: "relative",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 600,
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#ffffff",
        }}
      >
        Find a developer for live mentorship & freelance projects
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginBottom: 3,
          backgroundColor: "#f5945c",
          padding: "10px 20px",
          fontWeight: 500,
        }}
      >
        GET HELP NOW
      </Button>
      <img
        src={heroImage}
        alt="Placeholder"
        style={{
          width: "600px",
          height: "auto",
          position: "absolute",
          bottom: -110,
        }}
      />
    </Box>
  );
}
