import Image from "next/image";
import { getPopularMoviesByWeek } from "./lib/api/data";

export default async function Home() {
  const popularMoviesWeek = await getPopularMoviesByWeek();
  const imageURL = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center lg:p-24 md:flex-row md:flex-wrap md:gap-10 lg:gap-20">
        {popularMoviesWeek?.map((data) => {
          const title = data.title || data.name || data.original_title || data.original_name;

          return(
            <div
              key={title}
              className="flex flex-col justify-center items-center"
            >
              <p className="w-11/12 max-w-[200px] h-[80px] flex items-center justify-center text-xl text-center my-4"> 
                {data.title ? data.title : 
                data.name ? data.name :
                data.original_title ? data.original_title :
                data.original_name } 
              </p>

              <Image
                src={`${imageURL}${data.poster_path}`}
                alt={`${data.title} Image`}
                width={220}
                height={330}
                className="flex justify-center items-center mb-8 border border-white cursor-pointer"
              />
            </div>
          )
        })}
      </div>
    </main>
  );
}
