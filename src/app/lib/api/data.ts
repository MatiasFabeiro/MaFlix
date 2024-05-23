import { PopularMoviesWeek } from "../definitions";

export async function getPopularMoviesByWeek () {
  const url = `https://api.themoviedb.org/3/trending/all/week`

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
    }
  }

  const response = await fetch(url, options);
  
  if(!response.ok){
    throw new Error('Failed to fetch data from TMDB');
  }

  const responseData = await response.json();

  if (!responseData.results) {
    throw new Error('No "results" property in response data');
  }

  const movies: PopularMoviesWeek = responseData.results;

  return movies;
};