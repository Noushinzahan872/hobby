import React from 'react';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';
import { Helmet } from 'react-helmet';
import Footer from './Footer';




const AllGroup = () => {
    const hobbes=useLoaderData();
    console.log(hobbes);
    return (
        <>
        <Helmet>
            <title>AllGroup</title>
        </Helmet>
        <div>
            <h2 className="text-3xl font-bold text-center mb-8">All Groups</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
                {
                hobbes?.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
                }     
            </div>
            
        </div>
       <Footer></Footer>
        </>
    );
};

export default AllGroup;