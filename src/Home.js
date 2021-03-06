import { Box, Container, Stack, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";
import './styles/home.css';
import hero from './images/borabora.jpeg'
import hero2 from './images/hero-city.jpg'
import hero3 from './images/winterimage.jpg'
import hero1 from './images/mountain-hero.jpg'
import React, {useState, useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css'
const images = [
  {
    image:
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/25/thumbs/800x531/74707.jpg",
    title: "Mountain",
    name: "mountain",
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

const slideImages = [hero, hero1, hero2, hero3]


const renderedImages = images.map((image) => {
  return (
    <Link to={`/listings/${image.name}`}>
      <ImageListItem key={image.title}>
        <img
          name={image.name}
          src={image.image}
          className="climate"
        />
        <ImageListItemBar title={image.title} />
      </ImageListItem>
    </Link>
  );
});

function Home() {
  const [count, setCount] = useState(0);
  const [mousedOver, setMousedOver] = useState(false);
 
  useEffect(() => {
  
    if (mousedOver) {
      const timer = setInterval(() => {
    
        setCount((prevCount) => (prevCount + 1) % slideImages.length);
      }, 5000);
  
      return () => clearInterval(timer);
    } else {
     
      setCount(0);
    }
  
  }, [mousedOver]);

  let heroImage = <Box onMouseOver={() => setMousedOver(true)} sx={{height: "20%", boxShadow: "5px 10px 18px #888888"}} component="img" src={slideImages[count]} className="fade-in-image fade-out-image"/>

  return (
    <>
      <Stack >
          {heroImage}
          <h3>For really indecisive people who want to get away.</h3>
        
      </Stack>
      <Stack>
        <Container mx={4}>
          <Box>
            <ImageList
              gap={0}
              cols={2}
              rowHeight={250}
              sx={{ overflow: "hidden", borderRadius: 3, boxShadow: "5px 10px 18px #888888" }}
            >
              {renderedImages}
            </ImageList>
          </Box>
        </Container>
      </Stack>
    </>
  );
}

export default Home;
