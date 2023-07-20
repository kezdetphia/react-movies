
import './ActorListPage.css'
import {Link} from 'react-router-dom'
import ActorsCard from '../../components/ActorsCard/ActorsCard';


import React from 'react';

const ActorListPage = ({ movies }) => {
  let newArray = [];

  movies.forEach((movie) => {
    movie.cast.forEach((unique) => {
      if (!newArray.includes(unique)) {
        newArray.push(unique);
      }
    });
  });

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'black' }}>
    <h1 style={{color: 'white'}}>Actors</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {newArray.map((actor) => (
        <ActorsCard key={actor} name={actor} />
      ))}
    </div>
  </div>
  );
};

export default ActorListPage;
