import * as React from 'react';
import Grid from '@mui/material/Grid';
import MultiActionAreaCard from './Card';
import { useState, useEffect } from 'react'

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

const [listings, setListings] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  

 const reviewComments = listings.map((listing) => listing.reviews.map((review) => review.comment))

 const commentList = reviewComments.map(comment => {
   return <li>{comment}</li>
 })

  
console.log(listings)


const mappedListings = listings.map(listing => {
    return <MultiActionAreaCard key={listing.id} 
    location={listing.location} 
    description={listing.description} 
    price={listing.price_per_day} 
    title={listing.title} 
    date={listing.created_at} 
    image={listing.thumbnail}
    type={listing.climate_type}
    />
})




  return (
      <div className='grid'>

          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                
                    {mappedListings}
                    {commentList}
                    </Grid>    
              </Grid> 
          </Grid>
        

      </div>
  )}