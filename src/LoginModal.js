import { Box, Button, Typography, Modal, MenuItem, TextField } from '@mui/material/';
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
  const [loginData, setLoginData] = useState (defaultState)

  const handleOpen = () => setLoginOpen(true);
  const handleClose = () => {
      setLoginOpen(false);
      setAnchorEl(null)
  }

  function handleSubmit () {
    fetch('http://localhost:9292/accounts/authentication', {
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
          console.log(data.name)
          setCurrentUser(data.name)
          alert("User authorized");
          handleClose()
          navigate(`/account/${data.id}`)
        })
      } else {
        alert("Incorrect login info. Please try again")
      }})
      setLoginData(defaultState)
  }

  function handleChange (e) {
      let key = e.target.name
      let value = e.target.value
      setLoginData({...loginData, [key]:value})
  }

  return (
    <div>
      {currentUser === "Guest" ? <MenuItem onClick={handleOpen}>Login</MenuItem> : <MenuItem component={Link} to={`/account/${currentUser.id}`} >Manage Listings</MenuItem>}
      <Modal
        open={loginOpen}
        onClose={handleClose}
      >
        <Box component="form" sx={loginStyle}>
            <Typography variant="h6" component="h2">
              User Name
            </Typography>
            <TextField name="user" type="text" value={loginData.user} onChange={handleChange}>User Login</TextField>
            <Typography variant="h6" component="h2" >
              Password
            </Typography>
            <TextField type="password" name="password" value={loginData.password} onChange={handleChange}>Password</TextField>
            <br></br>
            <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal