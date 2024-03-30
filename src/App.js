import React from 'react';
import logo from './images/logo.png';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {

  const contactInfo = {
    address : "7C, Level Ground, Omaxe Gurgaon Mall, Sohna Road, Gurgaon, Haryana",
    phone : 9999063322,
  };

  return (
    <>
    <Header contactInfo={contactInfo} logo={logo} />
    <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>
    <Footer contactInfo={contactInfo} />
    </>
  );
}

export default App;
