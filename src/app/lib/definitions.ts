export type PopularMoviesWeek = {
  backdrop_path: string,
  id: number,
  original_title?: string,
  original_name?: string,
  overview: string,
  poster_path: string,
  media_type: string,
  adult: boolean,
  title?: string,
  name?: string,
  original_language: string,
  genre_ids: number[],
  popularity: number,
  release_date: string,
  video: false,
  vote_average: number,
  vote_count: number
}[];