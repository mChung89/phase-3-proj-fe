import './styles/App.css';
import NavBar from './NavBar'
import Home from './Home'
import ListingPage from './ListingPage'
import FilteredListings from './routes/FilteredListings'
import { Routes, Route } from "react-router-dom";
import Account from './routes/Account'
import UserAccount from './routes/UserAccount'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material';
import theme from './Theme';

function App() {
  const [currentUser, setCurrentUser] = useState({user_type: "Guest"})
  const [listings, setListings] = useState([])
  
 
  

  useEffect(() => {
    fetch("http://localhost:9292/listings")
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  
  return (
      <ThemeProvider theme={theme}>
        
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/listings" element={<ListingPage listings={listings}/>} />
        <Route exact path="listings/:climate" element={<FilteredListings />}/>
        <Route path="/account/:id" element={<Account currentUser={currentUser} listings={listings} setListings={setListings}/>} />
        <Route path="/users/:id" element={<UserAccount currentUser={currentUser} listings={listings} setListings={setListings}/>} />
      </Routes>
    </div>
    
  </ThemeProvider>
  );
}

export default App;
