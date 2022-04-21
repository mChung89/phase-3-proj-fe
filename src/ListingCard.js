import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import ListingModal from './ListingModal'

function ListingCard({
  listing,
  location,
  price,
  title,
  date,
  image,
  comment,
}) {
  const [booked, setBooked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const randRating = Math.floor(Math.random() * 11);

  function handleBooking() {
    setBooked((prev) => !prev);
  }
  

  return (
    <Card sx={{ maxWidth: 345, height: 380 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="mapped vacation images"
        />
        <CardContent sx={{height: 150}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>{location}</ul>
            <ul>Availability: {date}</ul>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions zeroMinWidth='true' pb={1}>
          <Button onClick={handleOpen}>More info</Button>
            <>
            {!booked ? (
             <Button onClick={handleBooking}> "Click Here to Reserve now!" </Button>
            ) : (
              <Alert variant="filled" severity="success"  onClick={handleBooking}>
                Your reservation is booked!
              </Alert>
            )}
          </>
          <ListingModal key={listing.id} listing={listing} price={price} comment={comment} setOpen={setOpen} open={open}/>
      </CardActions>
    </Card>
  );
}

export default ListingCard;