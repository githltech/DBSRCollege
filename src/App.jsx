import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './registration.jsx/Login';
import RVRentalForm from './pages/RVRentalForm';
import Contactus from './pages/Contactus';
import BookingPage from './pages/BookingPage';
import WhyChooseUs from './pages/WhyChooseUs';
import AboutUsPage from './pages/AboutUsPage';

const  App = ()  =>{

  return (
    <>
    <Router basename="/DBSRCollege">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='aboutus' element = {<AboutUsPage/>}/>
        <Route path='/rvrentalform' element = {<RVRentalForm/>}/>
        <Route path='/contactus' element = {<Contactus/>}/>
        <Route path="/booking" element = {<BookingPage/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/whychooseus' element = {<WhyChooseUs/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;
