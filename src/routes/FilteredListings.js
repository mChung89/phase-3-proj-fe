import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import ListingCard from "../ListingCard";
import { Outlet } from "react-router-dom"

function FilteredListings () {
    let params = useParams()
    const [climateListing, setClimateListing] = useState([])
    const [spacing, setSpacing] = useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

    useEffect(() => {
        fetch(`http://localhost:9292/listings/climate/${params.climate}`)
          .then(res => res.json())
          .then(setClimateListing)
      }, [])
    console.log(climateListing)

    const mappedClimateListing = climateListing.map(listing => {
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
              <li>{review.user.name} said: {review.comment}  Rating: {review.rating}/10</li>
            )
          })}
          
           />
    )})

    return (
      <div className='grid'>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {mappedClimateListing}
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </div>
    )

}

export default FilteredListings