import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import BlogSection from './BlogSection';
import AboutUs from './AboutUs';
import HobbyCard from './HobbyCard';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';


const Home = () => {
    const hobbes=useLoaderData();

    return (
        <div>
          <Helmet>
            <title>Home</title>
          </Helmet>
          
            <Banner></Banner>
            <div>
              <h2 className='mx-auto w-11/12 text-center text-5xl font-bold mb-10 text-blue-800 '>Featured Sections </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto w-11/12'> 
                {/* {
                hobbes?.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
                }      */}
                 {
            hobbes?.slice(0, 6).map(hobby => (
              <HobbyCard key={hobby._id} hobby={hobby} />
            ))
          }
            </div>   
            </div>
            <BlogSection></BlogSection>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;