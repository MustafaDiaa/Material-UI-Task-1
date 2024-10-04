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
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ComputerIcon
              sx={{ marginLeft: 2, marginRight: 1, color: "black" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Codementor
            </Typography>

            {/* Left Links */}
            <Button
              onClick={(event) => handleClick(event, setAnchorElMentorship)}
              sx={{ color: "black", marginLeft: 1, textTransform: "none" }}
            >
              Mentorship <ExpandMoreIcon />
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
              sx={{ color: "black", marginLeft: 1, textTransform: "none" }}
            >
              Expert Help <ExpandMoreIcon />
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
              sx={{ color: "black", marginLeft: 1, textTransform: "none" }}
            >
              Freelancing <ExpandMoreIcon />
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

          {/* Right Links */}
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Button sx={{ color: "black", textTransform: "none" }}>
              Become a Mentor
            </Button>
            <Button sx={{ color: "black", textTransform: "none" }}>
              Log In
            </Button>
            <Button
              sx={{
                color: "white",
                backgroundColor: "black",
                textTransform: "none",
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
