import React from "react";
import { Grid2 as Grid, Typography, Button } from "@mui/material";

export default function InfoSection({
  image,
  title,
  items,
  reverse,
  children,
}) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        paddingBottom: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
      }}
    >
      <Grid
        xs={12}
        sm={6}
        sx={{ marginRight: reverse ? 2 : 0, marginLeft: reverse ? 0 : 2 }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 600,
            color: "#333",
          }}
        >
          {title}
        </Typography>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              {item.icon}
              <Typography
                variant="body1"
                sx={{
                  marginLeft: 1,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  color: "#555",
                }}
              >
                {item.text}
              </Typography>
            </li>
          ))}
        </ul>
        {children && (
          <Button
            variant="contained"
            sx={{
              marginLeft: 5,
              backgroundColor: "#f5945c",
              boxShadow: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#d68e3e",
              },
            }}
          >
            {children}
          </Button>
        )}
      </Grid>

      <Grid xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Grid>
    </Grid>
  );
}
