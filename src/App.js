import './styles/App.css';
import NavBar from './NavBar'
import Home from './Home'
import ListingPage from './ListingPage'
import FilteredListings from './routes/FilteredListings'
import { Routes, Route } from "react-router-dom";
import Account from './Account'

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/listings" element={<ListingPage />} />
        <Route exact path="listings/:climate" element={<FilteredListings />}/>
        <Route path="/account/:id" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
