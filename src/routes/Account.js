import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Select } from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Modal } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';




function Account({listings, setListings}) {

  let params = useParams()
const [edit, setEdit] = useState(false)
const [owners, setOwners] = useState({})
const [input, setInput] = useState({
  title: "",
  location: "",
  description: "",
  price_per_day: 0,
  climate_type: "",
  thumbnail: "",
  owner_id: params.id
})
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    price_per_day: 0,
    climate_type: "",
    thumbnail: "",
    owner_id: params.id
  })

useEffect(() => {
  fetch(`http://localhost:9292/account/${params.id}`)
  .then(res => res.json())
  .then(data => setOwners(data))
},[listings])


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

function handleEdit(){
  setEdit(prev => !prev)
}

function handleChange(e){
  setInput({...input, [e.target.name]: e.target.value})
}


function editListing(e){

  fetch(`http://localhost:9292/listings/${e.target.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input),
  })
    .then(res => res.json())
    .then(data => setListings(listings.map(listing => {return listing.id === input.id ? input : listing}))
)
}

function handleForm(e){
  setFormData({...formData, [e.target.name]: e.target.value})
}
console.log(input)
function handleSubmit (event){
  event.preventDefault()
 // const added = listings.slice()
  const newListing = {
      title: formData.title,
      location: formData.location,
      description: formData.description,
      price_per_day: formData.price_per_day,
      climate_type: formData.climate_type,
      thumbnail: formData.thumbnail,
      owner_id: params.id
  }
  fetch('http://localhost:9292/listings', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newListing)
  })
  .then(res => res.json())
  .then(data => setListings([...listings, data]),

  setFormData({
    title: "",
    location: "",
    description: "",
    price_per_day: 0,
    climate_type: "",
    thumbnail: ""
})
  )}

function deleteListing (e){
  fetch(`http://localhost:9292/listings/${e.target.id}`, {
          method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        const deletedListings = listings.filter(listing => data.id !== listing)
        setListings(deletedListings)
      })
    }



const mappedAccount = owners?.listings?.map((listing) => {
  return (
    
    <Accordion >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{listing.title}:</Typography>
     </AccordionSummary>
     <AccordionDetails>
       {edit ? 
        <>
<Box sx={{ width: 1500, maxWidth: '100%',}} style={{textAlign: "center"}} >
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" name="title" placeholder={listing.title} onChange={handleChange} value={input.title}/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="number" name="price_per_day" placeholder={listing.price_per_day} onChange={handleChange} value={input.price_per_day}/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" name="location" placeholder={listing.location} onChange={handleChange} value={input.location}/>
        <Select
          sx={{width: '15%'}}
          labelId="Climate-cat-select"
          id="simple-select"
          name="climate_type"
          label="Category Select"
          placeholder='select a category'
          onChange={handleChange}
          value={input.climate_type}
        >
         
          <MenuItem value="mountain" >mountain</MenuItem>
          <MenuItem value="city">city</MenuItem>
          <MenuItem value="tropical">tropical</MenuItem>
          <MenuItem value="arctic">arctic</MenuItem>
          
        </Select>
  
         <TextField style={{margin: "5px 5px 5px 5px"}} fullWidth required id="outlined-required" type="text" placeholder={listing.description} name="description" onChange={handleChange} value={input.description}/>
         <TextField style={{margin: "5px 5px 5px 5px"}} fullWidth required id="outlined-required" type="text" name="thumbnail" placeholder={listing.thumbnail} onChange={handleChange} value={input.thumbnail}/>
      </Box>
      <Button id={listing.id} onClick={editListing}>Save</Button>
      </>
     :
      
      <Typography>
        <ul>
      <ul><strong>Title:</strong> {listing.title}</ul>
       <ul><strong>Description:</strong> {listing.description}</ul>
       <ul><strong>Location:</strong> {listing.location}</ul>
       <ul><strong> Thumbnail URL:</strong> {listing.thumbnail}</ul>
       <ul><strong>Category:</strong> {listing.climate_type}</ul>
       <ul><strong> Daily Rate:</strong> ${listing.price_per_day} </ul>
        </ul>
      </Typography>}

     </AccordionDetails>
     <Button onClick={handleEdit}>{edit ? "Close" : "Edit ✏️"}</Button>
     <Button id={listing.id} onClick={deleteListing}>Delete Listing 🗑️</Button>
   </Accordion>
  )
})

  return (
    <div>
      <div>
      {mappedAccount}
     
      <Button onClick={handleOpen} style={{border: "solid 1px gray", marginTop: "10px"}}>Create new listing</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        >
          <form onSubmit={handleSubmit}>
        <Box sx={style}>
         <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: "10px"}}>
            Fill out the fields below:
          </Typography>
          
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" name="title" placeholder='Enter title...' onChange={handleForm} value={formData.title}/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="number" name="price_per_day" placeholder="0"onChange={handleForm} value={formData.price_per_day}/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" name="location" placeholder='Enter location...' onChange={handleForm} value={formData.location}/>
        <Select
          labelId="Climate-cat-select"
          id="simple-select"
          name="climate_type"
          label="Category Select"
          placeholder='select a category'
          onChange={handleForm}
          value={formData.climate_type}
        >
         
          <MenuItem value="mountain" >mountain</MenuItem>
          <MenuItem value="city">city</MenuItem>
          <MenuItem value="tropical">tropical</MenuItem>
          <MenuItem value="arctic">arctic</MenuItem>
          
        </Select>
  
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" name="description" placeholder='Enter Description...' onChange={handleForm} value={formData.description}/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" name="thumbnail" placeholder='Enter URL...' onChange={handleForm} value={formData.thumbnail}/>
         <Button style={{border: "solid 1px gray"}} type="submit">Submit new listing</Button>
      </FormControl>
        </Box>
    </Box>
        </form>
      </Modal>
    </div>
    </div>
  );
}
export default Account