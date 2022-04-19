import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Modal } from '@mui/material';



function Account({listings, setListings}) {


const [edit, setEdit] = useState(false)
const [owners, setOwners] = useState({})
const [input, setInput] = useState('')
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
let params = useParams()

useEffect(() => {
  fetch(`http://localhost:9292/account/${params.id}`)
  .then(res => res.json())
  .then(data => setOwners(data))
},[])

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
  setInput(e.target.value)
}

function editListing(updatedListing){
  fetch(`http://localhost:9292/listings/${params.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      description: input
    }),
  })
      const updatedListings = listings.map(listing => {
    return  listing.id === updatedListing.id ? updatedListing : listing
})
  setListings(updatedListings)
}




const mappedAccount = owners?.listings?.map((listing) => {
  return (
    
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Listing Title: {listing.title}</Typography>
     </AccordionSummary>
     <AccordionDetails>
       {edit ? 

<Box sx={{ width: 1500, maxWidth: '100%',}} style={{textAlign: "center"}} >
       
       <TextField fullWidth id="fullWidth" placeholder={listing.description} onChange={handleChange} value={input}/>
        <Button onClick={editListing}>Save</Button>
      </Box>
     :
      
      <Typography>
        Listing Description: {listing.description}
      </Typography>}

     </AccordionDetails>
     <Button onClick={handleEdit}>{edit ? "Close" : "Edit ✏️"}</Button>
     <Button>Delete Listing 🗑️</Button>
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Fill out the fields below:
          </Typography>
          <form>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" label="Title" placeholder='Enter title...'/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="number" label="Price Per Day" placeholder="0"/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" label="Location" placeholder='Enter location...'/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" label="Description" placeholder='Enter Description...'/>
         <TextField style={{margin: "5px 5px 5px 5px"}} required id="outlined-required" type="text" label="Thumbnail URL" placeholder='Enter URL...'/>
         <Button style={{border: "solid 1px gray"}}>Submit new listing</Button>
         </form>
         
        </Box>
      </Modal>
    </div>
    </div>
  );
}
export default Account