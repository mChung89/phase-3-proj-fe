import { Box, Button, Typography, Modal, MenuItem, TextField } from '@mui/material/';
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

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

function LoginModal ({ setAnchorEl }) {
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

  const users = [
    {
      user: "mike",
      password: "asdf",
      id: 1
    },
    {
      user: "adam",
      password: "qwerty",
      id: 2
    },
  ];

  function handleSubmit (e) {
      let auth = users.find(user => user.user === loginData.user && user.password === loginData.password)
      if (auth) {
          alert("User authorized");
          let id = auth.id
          handleClose()
          navigate(`/account/${id}`)
       } else {
           alert("Incorrect login info. Please try again")
       }
      setLoginData(defaultState)
  }

  function handleChange (e) {
      let key = e.target.name
      let value = e.target.value
      setLoginData({...loginData, [key]:value})
  }

  console.log(loginData)

  return (
    <div>
      <MenuItem onClick={handleOpen}>My Account</MenuItem>
      <Modal
        open={loginOpen}
        onClose={handleClose}
      >
        <Box component="form" sx={loginStyle}>
            <Typography variant="h6" component="h2">
              User Name
            </Typography>
            <TextField name="user" value={loginData.user} onChange={handleChange}>User Login</TextField>
            <Typography variant="h6" component="h2" >
              Password
            </Typography>
            <TextField name="password" value={loginData.password} onChange={handleChange}>Password</TextField>
            <br></br>
            <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal