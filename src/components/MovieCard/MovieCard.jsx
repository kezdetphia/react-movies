import './MovieCard.css'
import {Link} from 'react-router-dom'


const MovieCard = ({movies}) => {
  return (

    movies.map((m,id)=>(
      
    <div className="card" key={id}>
      <Link to={`/moviedetails/movies[${id}]`}>
        <div className='poster-div'>
          <img
            src={m.posterPath}
            className="card-img-top"
            alt="Card Pic"
            />
        </div>
        <div className="card-body">
          <h5 className="card-title">Title: {m.title}</h5>
          <p className="card-text">
              Release Date: {m.releaseDate}
          </p>
        </div>
      </Link>
      </div>
    ))

  );
};

export default MovieCard;



