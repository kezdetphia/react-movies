import {useParams} from 'react-router-dom';
import './MovieDetailPage.css';

const MovieDetailPage = ({movies}) => {
  const {title} = useParams();

  const movie = movies.find((m)=>(m.title === title))

  if(!movie){
    return <div>Movie not found</div>
  }

  return (
    <div className='movie-detail-container'>
      <div className='movie-detail-image'>
        <img
          src={movie.posterPath}
          className="card-img-top"
          alt="Card Pic"
        />
      </div>
      <div className='movie-detail-details'>
        <h1>{movie.title}</h1>
        <p>{movie.releaseDate}</p>
        <p>cast</p>
      </div>
    </div>

    )
  
};

export default MovieDetailPage;