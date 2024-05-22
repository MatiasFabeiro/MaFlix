import Link from "next/link"
import Search from "./search"

export default function NavBar () {
  return(
    <nav className="w-full flex flex-wrap justify-center items-center p-8 ">
      <div className="w-full flex flex-row justify-evenly">
        
        <Link href={'/'} className="transform transition-all ease-in-out duration-300 hover:-translate-y-1">
          <p className="text-white text-xl my-4 lg:text-2xl"> MAFlix </p>
        </Link>

        <Search placeholder="Search..."/>

      </div>
    </nav>
  )
}