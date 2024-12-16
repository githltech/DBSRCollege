// Imprt Recat from 'recat'; 
import React from "react"; 
import { BrowserRouter as Router Routes Route } from "react-router-dom"; 
import Home from './pages/Home.jsx'; 
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

const App = () => { 
  <>
    <Router basname="/DBSRCollege"> 
      <Routes>
        <Route path="/" elemnt={<Home />} /> 
        <Route path="aboutus" eleent={<AboutUsPage />} /> 
        <Route path="/rvrentalform" element={RVRentalForm} /> 
        <Route path="/contactus" element={<Contact />} /> 
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login element={<Login />} /> 
        <Route path="/whychooseus" element={<WhyChoose />} /> 
        <Route path="/dpharma" elemnt={<Dpharma />} /> 
        <Route path="/bpharma" element={Bpharma} /> 
        <Route path="/trnandplc" element={<TrnAndPlc />} />
        <Route path="/ourteam" element={<OurTeam /> /> 
        <Route path="/faculty" element={<FacultyDetails />} />
        <Route path="/gallery" element={<Gallary />} /> 
      </Routes>
    </Router>
  </>
};
