import NavBar from './NavBar'
import Stack from '@mui/material/Stack'
import './styles/App.css';
import './images/hero.png'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello World</h1>
      <Stack direction="row" sx={{height: "600", bgcolor: "red"}}>
        <img src="./images/grid-layout.png"/>
      </Stack>
    </div>
  );
}

export default App;
