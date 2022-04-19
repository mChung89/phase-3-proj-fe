import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Modal } from '@mui/material';
import { useState } from 'react'
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavBar() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleOpen (e) {
      setOpen(prev => !prev)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {" "}
              It's the App
            </IconButton>
            <IconButton
              onClick={handleMenu}
              sx={{ ml: "auto" }}
              color="inherit"
            >
              Login
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
                setAnchorEl={setAnchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              ></LoginModal>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
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