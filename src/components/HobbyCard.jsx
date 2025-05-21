import React from 'react';

const HobbyCard = ({hobby}) => {
    const {groupName,category,imageUrl} =hobby;

    return (
        <div>
           <div className="card card-side bg-base-100 shadow-sm">
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
</div> 
        </div>
    );
};

export default HobbyCard;