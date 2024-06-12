import Image from "next/image";
import Link from "next/link";
import { getUpcomingMovies } from "@/app/lib/api/data";

export default async function UpcomingMovies({ searchQuery }: {searchQuery: string}) {
  const upcomingMovies = await getUpcomingMovies();
  const imageURL = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'

  const filteredMovies = upcomingMovies?.filter((movie) => {
    const title = movie.title || movie.name || movie.original_title || movie.original_name;
    return title?.toLowerCase().includes(searchQuery);
  });

  return (
    <div className="flex flex-col items-center justify-center lg:p-24 md:flex-row md:flex-wrap md:gap-10 lg:gap-20">
      {filteredMovies.length === 0 ?
      <p className="flex text-xl">There are no movies with this name</p>
      : filteredMovies?.map((movie, index) => {
        const title = movie.title || movie.name || movie.original_title || movie.original_name;

        return(
          <div
            key={`${title}-week-${index}`}
            className="relative flex flex-col justify-center items-center mb-8 overflow-hidden"
          >
            {/* <p className="w-11/12 max-w-[200px] h-[80px] flex items-center justify-center text-xl text-center my-4"> 
              {title} 
            </p> */}
            
            <Link
              href={`/movie/${movie.id}`}
            >
              <div className="relative w-[220px] h-[330px]">
                <Image
                  src={`${imageURL}${movie.poster_path}`}
                  alt={`${movie.title} Image`}
                  width={220}
                  height={330}
                  className="flex justify-center items-center mb-8 border border-white cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-110"
                />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2 backdrop-blur-sm">
                    {title} 
                  </div>
              </div>
            </Link>
          </div>
        )
        })}
    </div>
  )
}