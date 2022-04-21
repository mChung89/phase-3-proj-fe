import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
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
  description,
  price,
  title,
  date,
  image,
  type,
  comment,
}) {
  const [booked, setBooked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const randRating = Math.floor(Math.random() * 11);
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

  function handleBooking() {
    setBooked((prev) => !prev);
  }
  

  return (
    <Card sx={{ maxWidth: 345, disableRipple: true }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="mapped vacation images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>{location}</ul>
            <ul>{date}</ul>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
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
        </div>
      </CardActions>
    </Card>
  );
}

export default ListingCard;