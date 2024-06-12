import Link from "next/link"
import Search from "./search"
import { oswald } from "../fonts"

export default function NavBar () {
  return(
    <nav className="w-full flex flex-wrap justify-center items-center px-6 py-8">
      <div className="w-full flex flex-row justify-between sm:justify-evenly">
        
        <Link href={'/'} className="w-4/12">
          <p className={`${oswald.className} text-red-600 text-2xl my-4 md:text-[46px] 
            inline-block transform transition-all ease-in-out duration-300 origin-center hover:scale-110`}
          > 
            MaFlix
          </p>
        </Link>
        
        <Search placeholder="Search movie..."/>

      </div>
    </nav>
  )
}