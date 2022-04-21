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
    return (
      <Grid item>
      <ListingCard
        listing={listing}
        key={listing.id} 
        location={listing.location} 
        description={listing.description} 
        price={listing.price_per_day}
        type={listing.climate_type} 
        title={listing.title} 
        date={listing.created_at} 
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
    <div className='grid'>
      <Grid sx={{ flexGrow: 1 }} spacing={1} container>
            {mappedListings}
      </Grid>
      <Outlet />
    </div>
  )
}

export default ListingPage