import React from 'react';
import { Link } from 'react-router';

const HobbyCard = ({hobby}) => {
    const {_id,groupName,startDate,imageUrl} =hobby;

    return (
        <div>

    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
  <img className="w-full h-48 object-cover" src={imageUrl} alt="Hobby" />
  <div className="p-4">
    <h2 className="text-xl font-bold mb-2">{groupName}</h2>
    <p className="text-gray-900 text-sm mb-2">
      {startDate}
    </p>
    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
      <span>Difficulty: Medium</span>
    </div>
    <Link to={`/hobby/${_id}`}>
    <button className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
      See Details
    </button>
    </Link>
  </div>
</div>






           {/* <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={imageUrl} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{groupName}</h2>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">details</button>
    </div>
  </div>
</div>  */}
        </div>
    );
};

export default HobbyCard;