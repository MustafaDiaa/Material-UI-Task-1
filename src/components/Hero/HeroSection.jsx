import { Box, Typography, Button } from "@mui/material";
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
        background: "linear-gradient(to right, #003C50, #005976, #006080)",
        textAlign: "center",
        position: "relative",
        padding: 4,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          color: "#ffffff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        Find a developer for live mentorship & freelance projects
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          backgroundColor: "#f5945c",
          padding: "12px 24px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#f69c7e",
          },
        }}
      >
        GET HELP NOW
      </Button>
      <Box
        component="img"
        src={heroImage}
        alt="Hero Illustration"
        sx={{
          width: "700px",
          height: "auto",
          position: "absolute",
          bottom: -80,
          right: 0,
          transform: "translateX(20%)",
        }}
      />
    </Box>
  );
}
