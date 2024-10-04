import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ButtonAppBar() {
  const [anchorElMentorship, setAnchorElMentorship] = useState(null);
  const [anchorElHelp, setAnchorElHelp] = useState(null);
  const [anchorElFreelancing, setAnchorElFreelancing] = useState(null);

  const handleClick = (event, setter) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter) => {
    setter(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#003A47" }}>
        {" "}
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ComputerIcon
              sx={{ marginLeft: 2, marginRight: 1, color: "#f5945c" }}
            />{" "}
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#f5945c", fontWeight: "bold", letterSpacing: 1 }}
            >
              Codementor
            </Typography>
            {/* Left Links */}
            <Button
              onClick={(event) => handleClick(event, setAnchorElMentorship)}
              sx={{
                color: "#f5945c",
                marginLeft: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(245, 148, 92, 0.1)" },
              }}
            >
              Mentorship <ExpandMoreIcon sx={{ fontSize: "1.1rem" }} />
            </Button>
            <Menu
              anchorEl={anchorElMentorship}
              open={Boolean(anchorElMentorship)}
              onClose={() => handleClose(setAnchorElMentorship)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElMentorship)}>
                Option 1
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElMentorship)}>
                Option 2
              </MenuItem>
            </Menu>
            <Button
              onClick={(event) => handleClick(event, setAnchorElHelp)}
              sx={{
                color: "#f5945c",
                marginLeft: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(245, 148, 92, 0.1)" },
              }}
            >
              Expert Help <ExpandMoreIcon sx={{ fontSize: "1.1rem" }} />
            </Button>
            <Menu
              anchorEl={anchorElHelp}
              open={Boolean(anchorElHelp)}
              onClose={() => handleClose(setAnchorElHelp)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElHelp)}>
                Option 1
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElHelp)}>
                Option 2
              </MenuItem>
            </Menu>
            <Button
              onClick={(event) => handleClick(event, setAnchorElFreelancing)}
              sx={{
                color: "#f5945c",
                marginLeft: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(245, 148, 92, 0.1)" },
              }}
            >
              Freelancing <ExpandMoreIcon sx={{ fontSize: "1.1rem" }} />
            </Button>
            <Menu
              anchorEl={anchorElFreelancing}
              open={Boolean(anchorElFreelancing)}
              onClose={() => handleClose(setAnchorElFreelancing)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElFreelancing)}>
                Option 1
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElFreelancing)}>
                Option 2
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              sx={{
                color: "#f5945c",
                textTransform: "none",
                marginLeft: 2,
                "&:hover": { backgroundColor: "rgba(245, 148, 92, 0.1)" },
              }}
            >
              Become a Mentor
            </Button>
            <Button
              sx={{
                color: "#f5945c",
                textTransform: "none",
                marginLeft: 2,
                "&:hover": { backgroundColor: "rgba(245, 148, 92, 0.1)" },
              }}
            >
              Log In
            </Button>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#f5945c",
                textTransform: "none",
                marginLeft: 2,
                "&:hover": { backgroundColor: "#d68e3e" },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
