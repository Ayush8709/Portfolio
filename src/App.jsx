import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CarRental from './projects/CarRental';
import CoffeShop from './projects/CoffeShop';
import Resturant from './projects/ResturantMange';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Create a Default Page (404) to show when no routes match
const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
    </div>
  );
};

const App = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/coffee-shop" element={<CoffeShop />} />
        <Route path="/restaurant" element={<Resturant />} />

        {/* Add a catch-all route for unmatched paths (default page or 404) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;