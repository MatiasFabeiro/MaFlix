import { PopularMoviesWeek, MoviesImages } from "../definitions";

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

export async function getPlayingNowMovies () {
  const url = `https://api.themoviedb.org/3/movie/now_playing`

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

export async function getTopRatedMovies() {
  const url = `https://api.themoviedb.org/3/movie/top_rated`

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
}

export async function getUpcomingMovies() {
  const url = `https://api.themoviedb.org/3/movie/upcoming`

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
}

export async function getAllMovies() {
  try {
    const [playingNowMovies, popularMoviesWeek, topRatedMovies, upcomingMovies] = await Promise.all([
      getPlayingNowMovies(),
      getPopularMoviesByWeek(),
      getTopRatedMovies(),
      getUpcomingMovies()
    ]);

    const allMoviesMap = new Map();

    [...playingNowMovies, ...popularMoviesWeek, ...topRatedMovies, ...upcomingMovies].forEach(movie => {
      allMoviesMap.set(movie.id, movie);
    });

    const allMovies: PopularMoviesWeek = Array.from(allMoviesMap.values());

    return allMovies;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error;
  }
}

export async function getImageMovies(id: number) {
  const url = `https://api.themoviedb.org/3/movie/${id}/images`

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

  if (!responseData.backdrops) {
    throw new Error('No "results" property in response data');
  }

  const images: MoviesImages = responseData.backdrops;

  return images;
}