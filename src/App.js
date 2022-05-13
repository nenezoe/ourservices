
import './App.css';
import React from "react";
import GlobalStyles from './globalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Pages

 import Home from './pages/Home';
 import SignupPage from './pages/SignupPage';
 import PricingPage from './pages/PricingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/pricing' element={<PricingPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
