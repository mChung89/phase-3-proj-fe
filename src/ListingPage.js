import Grid from '@mui/material/Grid';
import ListingCard from './ListingCard';
import { useState } from 'react'
import { Outlet } from "react-router-dom"

function ListingPage({listings}) {
  const [spacing, setSpacing] = useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  
  const mappedListings = listings?.map(listing => {
    const date = new Date()
    const day = date.getDate()
    const month =  Date().slice(3,7)
    const currentDate = month + " " + day
    const dateRange = currentDate + " - " + month + " " + (day + Math.ceil((Math.random() * 10)))
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <ListingCard
        listing={listing}
        date={dateRange}
        key={listing.id} 
        location={listing.location} 
        description={listing.description} 
        price={listing.price_per_day}
        type={listing.climate_type} 
        title={listing.title}  
        image={listing.thumbnail}
        comment={listing?.reviews?.map((review) => {
          return(
            <>
            <ul>{review.user.name} said: {review.comment}<br>
            </br>
            Rating: {review.rating}/10
            </ul>
            </>
          )
        })}
        
         />
         </Grid>
  )})

  return (
    <Grid pl={1}>
      <Grid sx={{ flexGrow: 1 }} spacing={1} container>
            {mappedListings}
      </Grid>
      <Outlet />
    </Grid>
  )
}

export default ListingPage