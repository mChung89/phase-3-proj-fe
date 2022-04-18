import NavBar from './NavBar'
import Home from './Home'
import './styles/App.css';
import SpacingGrid from './Grid'
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<SpacingGrid />}>
          {/* <Route path="/listings/:climate" element={<ClimateListing />} />  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
