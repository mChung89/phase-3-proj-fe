import './styles/App.css';
import NavBar from './NavBar'
import Home from './Home'
import ListingPage from './ListingPage'
import FilteredListings from './routes/FilteredListings'
import { Routes, Route } from "react-router-dom";
import Account from './routes/Account'
import { useState } from 'react'


function App() {
  const [currentUser, setCurrentUser] = useState("Guest")
  
  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/listings" element={<ListingPage />} />
        <Route exact path="listings/:climate" element={<FilteredListings />}/>
        <Route path="/account/:id" element={<Account currentUser={currentUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
