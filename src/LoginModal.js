import { Grid,Box, Button, Typography, Modal, MenuItem, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material/';
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

const loginStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: 5
};

function LoginModal ({ setAnchorEl, setCurrentUser, currentUser }) {
    let navigate = useNavigate();
    const defaultState = {
        user: '',
        password: ''
    }
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginData, setLoginData] = useState(defaultState)
  const [userState, setUserState] = useState({user_type: "Guest"})

  const handleOpen = () => setLoginOpen(true);
  const handleClose = () => {
      setLoginOpen(false);
      setAnchorEl(null)
  }

  function handleSubmit () {
    if (userState === 'owner') {
    fetch('http://localhost:9292/accounts/authenticateowner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          setCurrentUser(data)
          alert("User authorized");
          handleClose()
          navigate(`/account/${data.id}`)
        })
      } else {
        alert("Incorrect login info. Please try again")
      }})
      setLoginData(defaultState)
    } else if (userState === 'user') {
      fetch('http://localhost:9292/accounts/authenticateuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          setCurrentUser(data)
          alert("User authorized");
          handleClose()
          console.log(currentUser)
          navigate(`/users/${data.id}`)
        })
      } else {
        alert("Incorrect login info. Please try again")
      }})
      setLoginData(defaultState)
    }
  }

  function handleChange (e) {
      let key = e.target.name
      let value = e.target.value
      if (value !== "owner" && value !== "user") {
      setLoginData({...loginData, [key]:value})
      } else if (value === "owner" || value === "user") {
        setUserState(e.target.value)
      }
  }

  function menuItemChooser (userType) {
    console.log(userType)
    if (userType === "Guest") {
      return <MenuItem onClick={handleOpen}>Login</MenuItem>
    } else if (userType === 'owner') {
      return <MenuItem component={Link} to={`/account/${currentUser.id}`}>My Listings</MenuItem>
    } else if (userType === 'user') {
      return <MenuItem component={Link} to={`/users/${currentUser.id}`}>My Stays</MenuItem>
    }
  }

  const menuItem = menuItemChooser(currentUser.user_type)

  return (
    <div>
      {menuItem}
      <Modal open={loginOpen} onClose={handleClose}>
        <Box component="form" sx={loginStyle}>
          <Typography variant="h6" component="h2">
            User Name
          </Typography>
          <TextField
            name="user"
            type="text"
            value={loginData.user}
            onChange={handleChange}
          >
            User Login
          </TextField>
          <Typography variant="h6" component="h2">
            Password
          </Typography>
          <TextField
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          >
            Password
          </TextField>
          <Grid container column>
            <Grid sx={{bgcolor: 'red'}} item xs={12}>
            <RadioGroup
              row
              justifyContent='center'
              onChange={handleChange}
            >
              <FormControlLabel
                value="owner"
                control={<Radio size="small"/>}
                label="owner"
              />
              <FormControlLabel value="user" control={<Radio size="small"/>} label="user" />
            </RadioGroup>
            </Grid>
          </Grid>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal