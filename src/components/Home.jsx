import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import BlogSection from './BlogSection';
import AboutUs from './AboutUs';
import HobbyCard from './HobbyCard';
import { useLoaderData } from 'react-router';


const Home = () => {
    const hobbes=useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
                {/* {
                hobbes?.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
                }      */}
                 {
            hobbes?.slice(0, 6).map(hobby => (
              <HobbyCard key={hobby._id} hobby={hobby} />
            ))
          }
            </div>   
            <BlogSection></BlogSection>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;