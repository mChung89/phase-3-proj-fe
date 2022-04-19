import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BasicModal from './Modal';
import { useEffect, useState } from 'react';

export default function MultiActionAreaCard({location, description, price, title, date, image, type}) {

    const [open, setOpen] = React.useState(false);
    const [reviews, setReviews] = useState([])
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch("http://localhost:9292/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
      }, [])
    

      const randRating = Math.floor(Math.random() * 11)
      
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {image}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <li>Daily Rate: ${price}</li>
            <li>Location Type: {type}</li>
            <li><em>{location}</em></li>
            <li>{description}</li> 
            <p>---Reviews---</p>
            <ul></ul>
          </Typography>
        </Box>
      </Modal>
    </div>
      </CardActions>
    </Card>
  );
}









   