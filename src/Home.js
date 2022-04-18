import { Box, Grid, Container } from '@mui/material'
import mountain from './images/mountain.jpeg'
import arctic from './images/arctic.jpeg'
import tropical from './images/tropical.jpeg'
import city from './images/city.jpeg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const images = [(
    <ImageListItem>
        <img src={mountain} />
        <ImageListItemBar title="Mountain"/>
    </ImageListItem>),(
    <ImageListItem>
        <img src={arctic} />
        <ImageListItemBar title="Arctic"/>
    </ImageListItem>),(
    <ImageListItem>
        <img src={tropical} />
        <ImageListItemBar title="Tropical"/>
    </ImageListItem>),(
    <ImageListItem>
        <img src={city} />
        <ImageListItemBar title="City"/>
    </ImageListItem>)
    ]

function Home() {
  return (
    <Container mx={4}>
        <Box>
      <ImageList cols={2} rowHeight={250} sx={{overflow: "hidden", borderRadius: 3}}>
          {images}
      </ImageList>
      </Box>
    </Container>
  );
}

export default Home;
