import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        padding: 4,
        textAlign: "center",
        marginTop: "auto",
        borderTop: "1px solid #444",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <IconButton
          component={Link}
          href="https://facebook.com"
          target="_blank"
          color="inherit"
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com"
          target="_blank"
          color="inherit"
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com"
          target="_blank"
          color="inherit"
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com"
          target="_blank"
          color="inherit"
        >
          <GitHub />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com"
          target="_blank"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component={Link}
          href="https://youtube.com"
          target="_blank"
          color="inherit"
        >
          <YouTube />
        </IconButton>
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        <Grid item>
          <Typography variant="h6">Quick Links</Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            About
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Services
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Contact
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h6">Resources</Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Blog
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            FAQs
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Support
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h6">Company</Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Careers
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Press
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Investors
          </Link>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mt: 3 }}>
        &copy; {new Date().getFullYear()} Mohammed Omran. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}
