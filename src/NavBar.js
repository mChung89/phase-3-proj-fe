import { Box, Tabs, Tab, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavBar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate()
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  function handleLogOut () {
    setCurrentUser({user_type: "Guest"})
    setAnchorEl(null)
    navigate(`/listings`)
  }


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
                variant="h5"
              sx={{ mr: 2 }}
            >
              {" "}
              {currentUser.user_type === "Guest" ? "Welcome!" : `Welcome ${currentUser.name}`}
            </Typography>
            <IconButton
              onClick={handleMenu}
              sx={{ ml: "auto" }}
              color="inherit"
            >
              {currentUser === "Guest" ? "Login" : "Account"}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <LoginModal
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser}
                setAnchorEl={setAnchorEl}
                onClose={handleClose}
              ></LoginModal>
              {currentUser.user_type !== "Guest" ? <MenuItem onClick={handleLogOut}>Logout</MenuItem> : null}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ zIndex: 7, display: 'block', width: "100%",position: "sticky", top: 0, bgcolor: "white" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", bgcolor:'white' }}>
          <Tabs
            value={value}
            onChange={handleChange}
          >
            <Tab component={Link} to="/" label="Home" {...a11yProps(0)} />
            <Tab
              component={Link}
              to="/listings"
              label="Listings"
              {...a11yProps(1)}
            />
            <Tab label="Something" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default NavBar