import MovieCard from "../../components/MovieCard/MovieCard";


const MoviesListPage = ({movies}) => {
  return (
    <div>
      <h1>MoviesListPage</h1>
      <MovieCard  movies={movies}/>
    </div>
  );
};

export default MoviesListPage;


