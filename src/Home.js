import { Box, Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";

const images = [
  {
    image:
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/25/thumbs/800x531/74707.jpg",
    title: "Mountain",
    name: "mountian",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0043/8471/8938/products/163580814332612491.jpg?v=1635808333",
    title: "Arctic",
    name: "arctic",
  },
  {
    image:
      "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-bora-bora.jpg",
    title: "Tropical",
    name: "tropical",
  },
  {
    image: "https://s.hdnux.com/photos/01/22/22/74/21573426/3/rawImage.jpg",
    title: "City",
    name: "city",
  },
];
const renderedImages = images.map((image) => {
  return (
    <Link to={`/listings/${image.name}`}>
      <ImageListItem key={image.title}>
        <img
          name={image.name}
          src={image.image}
          loading="lazy"
        />
        <ImageListItemBar title={image.title} />
      </ImageListItem>
    </Link>
  );
});

function Home() {
  return (
    <Container mx={4}>
      <Box>
        <ImageList
          gap={0}
          cols={2}
          rowHeight={250}
          sx={{ overflow: "hidden", borderRadius: 3 }}
        >
          {renderedImages}
        </ImageList>
      </Box>
    </Container>
  );
}

export default Home;
