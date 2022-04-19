import { Box, Grid, Container } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const images = [(
    <ImageListItem>
        <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/25/thumbs/800x531/74707.jpg" alt="mountain" />
        <ImageListItemBar title="Mountain"/>
    </ImageListItem>),(
    <ImageListItem>
        <img src="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/163580814332612491.jpg?v=1635808333" alt="arctic"/>
        <ImageListItemBar title="Arctic"/>
    </ImageListItem>),(
    <ImageListItem>
        <img src="https://www.planetware.com/photos-large/SEY/best-tropical-vacations-bora-bora.jpg" alt="tropical" />
        <ImageListItemBar title="Tropical"/>
    </ImageListItem>),(
    <ImageListItem>
        <img src="https://s.hdnux.com/photos/01/22/22/74/21573426/3/rawImage.jpg" alt="city"/>
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
