import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from 'react'
import Weather from "./Weather";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};


function ListingModal({ listing, setOpen, open, comment, price }) {
    const { location, description, title, thumbnail } = listing
    const [weather, setWeather] = useState([])
    const city = location.split(",")[0]
    useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc33335b724be1c721654cfd1e4d1665`)
    .then(res => res.json())
    .then(data => {
      setWeather(data)
      console.log(data)
  })},[open])

  function handleClose () {
      setOpen(false)
  }
  return (
      <>
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <Stack direction="row">
            <Grid container xs={7}>
              <ul>
                <li>Daily Rate: ${price}</li>
                <li><em>{location}</em></li>
              {weather !== [] ? <Weather weather={weather} /> : null}
              <li>Placeholder for weather</li>
              </ul>
            </Grid>
            <Grid direction="column" container xs={5}>
              <Box component="img" src={thumbnail} sx={{ borderRadius: 2, height: 120, boxShadow: "5px 5px 5px #888888" }} />
            </Grid>
          </Stack>
          <Box pt={2}>
            <Typography component="body1" variant="body" align="justify">
            {description}
            </Typography>
          </Box>
          <Grid container>
              <Grid item xs={4}>
            <Typography item variant="p"> --Reviews-- </Typography>
            </Grid>
            <Grid item xs={8}>
            </Grid>
          </Grid>
          <ul>
            {comment.length < 1
              ? "No users have reviewed this listing!"
              : comment}
          </ul>
        </Typography>
      </Box>
    </Modal>
    </>
  );
}

export default ListingModal;