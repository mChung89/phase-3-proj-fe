import NavBar from './NavBar'
import Home from './Home'
import './styles/App.css';
import './images/hero.png'
import Home from './Home';
import SpacingGrid from './Grid'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<SpacingGrid />} />
      {/*<Route path="mylistings" element={<Invoices />} /> */}
    </Routes>
    </div>
  );
}

export default App;
