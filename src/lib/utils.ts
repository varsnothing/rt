// This facade is to adhere to SOLID principles.
export const facadeMovies = (data) => {
  const POSTER_BASEPATH = "https://image.tmdb.org/t/p/w185";
  return {
    id: data?.id,
    title: data?.title,
    poster: POSTER_BASEPATH + data?.poster_path,
    synopsis: data?.overview,
    userRating: data?.vote_average,
    releaseDate: data?.release_date.split("-")[0],
    duration: data?.runtime,
  };
};
