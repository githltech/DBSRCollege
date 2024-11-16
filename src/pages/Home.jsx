import React from 'react';
import Layout from '../components/Layout';
import Herosection from '../components/Herosection';
import NewsAndBlogs from '../components/NewsAndBlogs';
import FacultyDetails from '../components/FacultyDetails';
import Testimonials from '../components/Testimonials';
import PrincipleAndchairmen from '../components/principleAndchairmen';
import Courses from '../components/Courses';
import Gallery from '../components/Gallary';
import FAQSection from '../components/FAQSection';
import Features from '../components/Features';
import AboutDbsr from '../components/AboutDbsr';
// import ContactSection from '../components/ContactSection';
import NewsMedia from '../components/NewsMedia';
import WhyDbsr from '../components/WhyDbsr';
import StatisticsSection from '../components/StatisticsSection';
import SearchForm from '../components/SearchForm';
//import Dropdown from '../components/Dropdown';
//import ReviewScroll from '../components/ReviewScroll';
const Home = () =>{
    return (
        <>
       <Layout>
        <Herosection/>
        <Features/>
        <AboutDbsr/>
        <StatisticsSection/>
        <PrincipleAndchairmen/>
        <NewsMedia/>
        <NewsAndBlogs/>
        <Gallery/>
        <FacultyDetails/>
        <Courses/>
        <SearchForm/>
        <Testimonials/>
        <WhyDbsr/>
        <FAQSection/>
        {/* <ContactSection/> */}
       </Layout>
        </>
    );
};

export default Home;