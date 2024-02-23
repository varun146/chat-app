import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-4 p-4'>
      <input type='text' placeholder='Search...' className='input input-bordered focus:outline-none rounded-full' />
      <button className='btn btn-circle bg-purple-600 border-purple-600 text-white'>
        <FaSearch size={20} />
      </button>
    </form>
  )
}

export default SearchInput
