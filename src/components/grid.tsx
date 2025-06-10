export function Grid({ data = [] }) {
  const renderCard = (movie) => {
    return (
      <a
        key={`rt-movie--${movie.title}`}
        className="rt-grid__card"
        href={`/movie/${movie.id}`}
      >
        <img className="rt-grid__card__img" src={movie.poster} />
      </a>
    );
  };

  return (
    <>
      <div className="rt-grid">{data.map(renderCard)}</div>
    </>
  );
}
