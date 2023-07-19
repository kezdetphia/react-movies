import MovieCard from "../../components/MovieCard/MovieCard";
import './MoviesListPage.css';

const MoviesListPage = ({movies}) => {
  return (
    <div className="movies-list-page">
      <MovieCard  movies={movies} />
    </div>
  );
};

export default MoviesListPage;


