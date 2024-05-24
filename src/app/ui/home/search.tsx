'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search({ placeholder }: { placeholder?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')

    if(term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }

    replace(`${pathname}?${params.toString()}`)
  }, 500)

  return(
    <div className="relative flex items-center">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        className="peer block w-10/12 text-white rounded-md border border-white bg-transparent py-[9px] pl-10 text-sm outline-2 placeholder:text-white"
        defaultValue={searchParams.get('search')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-white peer-focus:text-gray-500" />
    </div>
  )
}