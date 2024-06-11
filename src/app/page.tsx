import WeekMovies from '@/app/ui/home/week_movies'
import NowPlayingMovies from '@/app/ui/home/now_playing_movies'
import TopRatedMovies from '@/app/ui/home/top_rated_movies'
import UpcomingMovies from '@/app/ui/home/upcoming_movies'

export default function Home({searchParams} : {searchParams: { search?: string } }) {

  const searchQuery = searchParams?.search?.toLowerCase() || '';
  console.log("searchQuery",searchQuery)
  console.log("searchParams",searchParams)
  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-[32px] mb-20 font-black md:self-start lg:ml-20 lg:mb-0"> Now playing: </h1>
      <NowPlayingMovies searchQuery={searchQuery}/>
      <h1 className="text-[32px] mb-20 font-black md:self-start lg:ml-20 lg:mb-0"> Popular this week: </h1>
      <WeekMovies searchQuery={searchQuery}/>
      <h1 className="text-[32px] mb-20 font-black md:self-start lg:ml-20 lg:mb-0"> Top Rated: </h1>
      <TopRatedMovies searchQuery={searchQuery}/>
      <h1 className="text-[32px] mb-20 font-black md:self-start lg:ml-20 lg:mb-0"> Upcoming: </h1>
      <UpcomingMovies searchQuery={searchQuery}/>
    </main>
  );
}