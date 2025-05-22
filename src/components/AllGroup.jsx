import React from 'react';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';

const AllGroup = () => {
    const hobbes=useLoaderData();
    console.log(hobbes);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
                {
                hobbes?.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
                }     
            </div>
        </div>
    );
};

export default AllGroup;