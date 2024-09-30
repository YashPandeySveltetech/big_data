import React from 'react'
import { Search } from 'lucide-react';


function SearchComponent() {
  return (
    <div className="mt-2 relative">
          <input
            type="text"
            placeholder="Type / to search"
            className="w-full p-2 pl-8 border rounded-md"
          />
          <Search className="absolute left-2 top-2.5 text-gray-400" size={20} />
        </div>
  )
}

export default SearchComponent