import Image from "next/image";
import { getPopularMoviesByWeek } from "@/app/lib/api/data";
import { StarIcon } from '@heroicons/react/24/outline';

export default async function Movie({ params }: {params: { id: string } }) {
  const id = params.id;
  const popularMoviesWeek = await getPopularMoviesByWeek();
  const imageURL = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'
  
  return (
    popularMoviesWeek.filter(movie => movie.id.toString() === id).map((movie) => {
      const title = movie.title || movie.name || movie.original_title || movie.original_name;
      
      return(
        <main
          key={`${title}`}
          className="flex flex-col items-center justify-center min-h-screen"
        >
            <h1 className="text-[40px] max-w-[50rem] mb-40"> {title} </h1>

          <div
            className="flex flex-row items-center justify-center"
          >
            <div className="flex flex-col mr-40">
              <p className="text-[24px] max-w-[30rem] mb-10"> {movie.overview} </p>

              <p className="flex flex-row text-[24px] max-w-[30rem] items-center"> 
                <strong> Users review score: </strong> 
                <StarIcon className="h-[24px] w-[24px] text-white ml-4 mr-1"/> 
                {movie.vote_average}
              </p>

              <p className="flex flex-row text-[24px] max-w-[30rem] items-center"> 
                <strong> Rated: </strong> 
                &nbsp;{movie.adult ? "+18" : "All public"}
              </p>
            </div>
            
            <Image
              src={`${imageURL}${movie.poster_path}`}
              alt={`${movie.title} image`}
              width={220}
              height={330}
              className="flex justify-center items-center mb-8 border border-white"
            />
            
          </div>
        </main>
      )
    })
  )
}