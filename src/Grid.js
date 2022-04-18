import * as React from 'react';
import Grid from '@mui/material/Grid';
import MultiActionAreaCard from './Card';
import { useState, useEffect } from 'react'

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])


const mappedListings = listings.map(listing => {
    return <MultiActionAreaCard key={listing.id} location={listing.location} description={listing.description} price={listing.price_per_day} title={listing.title} date={listing.created_at} image={listing.thumbnail}/>
})

  return (
      <div className='grid'>

          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                
                    {mappedListings }
                    
                    </Grid>    
              </Grid> 
          </Grid>
        );

      </div>
  )}