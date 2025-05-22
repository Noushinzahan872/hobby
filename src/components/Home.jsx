import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import BlogSection from './BlogSection';
import AboutUs from './AboutUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BlogSection></BlogSection>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;