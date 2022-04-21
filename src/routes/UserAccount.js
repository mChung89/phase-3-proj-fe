import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Select } from "@mui/material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function UserAccount({ listings, setListings, currentUser }) {
  const defaultState = {
    comment: '',
    rating: 1
  };
  const [edit, setEdit] = useState(false);
  const [owners, setOwners] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let params = useParams();
  const [formData, setFormData] = useState(defaultState);

  function handleEdit() {
    setEdit((prev) => !prev);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function editListing(e) {
    if (formData.comment === "" || formData.rating === undefined) {
      alert("Please enter all fields");
    } else {
      fetch(`http://localhost:9292/review/${e.target.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setListings(
            listings.map(listing => {
              return listing.id === data.id ? data : listing;
            })
          );
          setFormData(defaultState);
          alert("Thanks for your review!")
        });
    }
  }

  function makeRatingOptions() {
    let i = 1;
    let arr = [];
    while (i <= 10) {
      arr.push(<MenuItem value={i}>{i}</MenuItem>);
      i++;
    }
    return arr;
  }
  const ratingOptions = makeRatingOptions();

  const mappedAccount = currentUser.reviews?.map((review) => {
    return (
      <Accordion key={review.id}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            Listing Title: {review.listing.title} at {review.listing.location}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {edit ? (
            <Box
              sx={{ width: 1500, maxWidth: "100%" }}
              style={{ textAlign: "center" }}
            >
              <Stack direction="row">
                <TextField
                  name="comment"
                  fullWidth
                  placeholder={review.comment}
                  onChange={handleChange}
                  value={formData.comment}
                />
                <FormControl>
                  <InputLabel>Rating</InputLabel>
                  <Select
                    name="rating"
                    onChange={handleChange}
                    sx={{ minWidth: 100 }}
                    value={formData.rating}
                  >
                    {ratingOptions}
                  </Select>
                </FormControl>
              </Stack>
              <Button id={review.id} onClick={editListing}>
                Update review
              </Button>
            </Box>
          ) : null}
        </AccordionDetails>
        <Button onClick={handleEdit}>
          {edit ? "Close" : "Add your review ✏️"}
        </Button>
      </Accordion>
    );
  });

  return <>{mappedAccount}</>;
}
export default UserAccount;
