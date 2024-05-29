// import Image from "next/image";
import { getPopularMoviesByWeek } from "@/app/lib/api/data";

export default async function Movie({ params }: {params: { id: string } }) {
  const id = params.id;
  const popularMoviesWeek = await getPopularMoviesByWeek();
  const imageURL = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'
  
  return (
    popularMoviesWeek.filter(movie => movie.id.toString() === id).map((movie) => {
      const title = movie.title || movie.name || movie.original_title || movie.original_name;
      
      return(
        <div
          key={`${title}`}
          className="flex items-center justify-center"
        >
          {title}
        </div>
      )
    })
  )
}