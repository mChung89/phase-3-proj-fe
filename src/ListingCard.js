import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

function ListingCard ({location, description, price, title, date, image}) {
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
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className='btn'>
          More info
        </Button>
      </CardActions>
    </Card>
  );
}

export default ListingCard