

const MovieDetailPage = ({movies}) => {
  return (
    movies.map((m,id)=>(
    <div key={id}>
      <h1>MovieDetailPage</h1>
      <p>m.title</p>
      <p>m.releaseDate</p>
      <img
        src={m.posterPath}
        className="card-img-top"
        alt="Card Pic"
      />
      <p>cast</p>

    </div>

    ))
  );
};

export default MovieDetailPage;