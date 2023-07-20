
import React from 'react';

const ActorCard = ({ name, posterPath }) => {
  
  const imageUrl = `https://picsum.photos/200/300?random=${Math.random()}`;

  return (
    <div style={{ background: `url(${imageUrl})`, backgroundSize: 'cover', width: '200px', height: '300px', margin: '5px' }}>
      <h3>{name}</h3>
    </div>
  );
};

export default ActorCard;
