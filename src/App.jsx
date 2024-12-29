// import React,{useEffect} from 'react';
 import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './registration.jsx/Login';
import RVRentalForm from './pages/RVRentalForm';
import Contactus from './pages/Contactus';
import BookingPage from './pages/BookingPage';
import WhyChooseUs from './pages/WhyChooseUs';
import AboutUsPage from './pages/AboutUsPage';
import Dpharma from './pages/courses/Dpharma';
import Bpharma from './pages/courses/Bpharma';
import TrnAndPlc from './pages/Placement/TrnAndPlc';
import OurTeam from './pages/courses/OurTeam';
import FacultyDetails from "./components/FacultyDetails";
import Gallery from "./components/Gallary";
import Home from './pages/Home';

const  App = ()  =>{

  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
    
  // }, []);

  return (
    <>
    <Router> 
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='aboutus' element = {<AboutUsPage/>}/>
        <Route path='/rvrentalform' element = {<RVRentalForm/>}/>
        <Route path='/contactus' element = {<Contactus/>}/>
        <Route path="/booking" element = {<BookingPage/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/whychooseus' element = {<WhyChooseUs/>}/>
        <Route path='/dpharma' element = {<Dpharma/>} />
        <Route path='/bpharma' element = {<Bpharma/>}/>
        <Route path= '/trnandplc' element = {<TrnAndPlc/> }/>
        <Route path='/ourteam' element = {<OurTeam/> } />
        <Route path="/faculty" element={<FacultyDetails />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
