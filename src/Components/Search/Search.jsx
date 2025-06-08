import React from 'react'
import { SearchIcon } from 'lucide-react'

const Search = ({ onSearch, query }) => {
  return (
    <div className='flex items-center justify-center w-full mb-4'>
      <input
        className='shadow shadow-gray-500 rounded-l-md p-2 outline-0 focus:ring-1 focus:ring-primary transition-all w-72  md:w-xl xl:w-3xl'
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        value={query}
        placeholder='Search here'
      />
      <div className='shadow shadow-gray-500 rounded-r-md p-2 bg-white cursor-pointer'>
        <SearchIcon className='text-gray-600' />
      </div>
    </div>
  )
}

export default Search;
