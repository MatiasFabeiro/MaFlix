import Image from "next/image";
import { getPopularMoviesByWeek } from "./lib/api/data";

export default async function Home() {
  const popularMoviesWeek = await getPopularMoviesByWeek();
  const imageURL = 'https://media.themoviedb.org/t/p/w220_and_h330_face/'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center lg:p-24 md:flex-row md:flex-wrap md:gap-10 lg:gap-20">
        {popularMoviesWeek?.map((data) => (
          <Image
            src={`${imageURL}${data.poster_path}`}
            alt={`${data.title} Image`}
            key={`${data.title}`}
            width={220}
            height={330}
            className="mb-8"
          >
          </Image>
        ))}
      </div>
    </main>
  );
}
