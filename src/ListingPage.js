import Grid from '@mui/material/Grid';
import ListingCard from './ListingCard';
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"

function ListingPage() {
  const [spacing, setSpacing] = useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const [listings, setListings] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:9292/listings")
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  const reviewList = listings.map((listing) => listing.reviews)
  

  const mappedListings = listings.map(listing => {
    return (
      <ListingCard 
        key={listing.id} 
        location={listing.location} 
        description={listing.description} 
        price={listing.price_per_day}
        type={listing.climate_type} 
        title={listing.title} 
        date={listing.created_at} 
        image={listing.thumbnail}
        comment={listing.reviews.map((review) => {
          return(
            <>
            <li>{review.user.name} said: {review.comment}<br>
            </br>
            Rating: {review.rating}/10
            </li>
            </>
          )
        })}
        
         />
  )})

  return (
    <div className='grid'>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {mappedListings}
            
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  )
}

export default ListingPage