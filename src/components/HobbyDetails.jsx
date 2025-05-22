
import React from 'react';
import { Link, useLoaderData } from 'react-router';

const HobbyDetails = () => {

const group = useLoaderData();

    return (
        <div>
       <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-10">
  <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl w-full rounded-xl overflow-hidden">

<div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl w-full rounded-xl overflow-hidden">
        {/* Image Section */}
        <figure className="lg:w-1/2 w-full h-64 lg:h-auto">
          <img
            src={group.imageUrl}
            alt=""
            className="object-cover w-full h-full"
          />
        </figure>

        {/* Details Section */}
        <div className="card-body lg:w-1/2 p-6 space-y-4">
          <h2 className="card-title text-3xl font-bold text-primary">{group.groupName}</h2>

          <div>
            <p className="font-semibold">📍 Location:</p>
            <p>{group.location}</p>
          </div>

          <div>
            <p className="font-semibold">📝 Description:</p>
            <p>{group.description}</p>
          </div>

          <div>
            <p className="font-semibold">👤 Max-Member:</p>
            <p>{group.maxMembers}</p>
          </div>

          <div>
            <p className="font-semibold">💸 Start Date</p>
           {group.startDate}
          </div>

          <div className="pt-4">
            <Link to="/allGroup" className="btn btn-primary">
              Back AllGroups
            </Link>
          </div>
        </div>
      </div>

</div>
</div>
      
       
        </div>
    );
};

export default HobbyDetails;