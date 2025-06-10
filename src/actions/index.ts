import { facadeMovies } from "@/lib";

// isomorphic flux actions
export const getMovies = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${process.env.MDB_API_KEY}`,
    );
    const data = await response.json();

    const facadeResults = data?.results?.map(facadeMovies);

    const finalData = {
      pages: data?.total_pages,
      currentPage: page,
      results: facadeResults,
    };

    return finalData;
  } catch (e) {
    console.error(e);
  }
};

export const getTrailers = async (id) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.MDB_API_KEY}`,
  );
  const data = await results.json();

  if (data.results.length > 0) {
    return data.results
      .map((video) => {
        if (video.site === "YouTube" && video.type === "Trailer") {
          return `https://m.youtube.com/watch?v=${video.key}`;
        }
        return;
      })
      .filter((el) => el);
  }

  return [];
};

export const getMovie = async (id) => {
  try {
    const results = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MDB_API_KEY}`,
    );
    const data = await results.json();

    const facadeMovie = facadeMovies(data);
    const videos = await getTrailers(id);
    facadeMovie.trailers = videos;

    return facadeMovie;
  } catch (e) {
    console.error(e);
  }
};
