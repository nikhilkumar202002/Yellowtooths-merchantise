"use client";

import { useState } from "react";
import { IoMdSearch, IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-md group">
      {/* Search Icon (Left) */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IoMdSearch className="h-5 w-5 text-gray-400 group-focus-within:text-yellow transition-colors" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="block w- pl-10 pr-10 py-2 bg-[#2A2A2A] border border-transparent 
                   rounded-full text-white placeholder-gray-400 text-sm
                   focus:outline-none focus:ring-1 focus:ring-yellow focus:bg-dark 
                   transition-all duration-200"
      />

      {/* Clear Button (Right) - Only shows when there is text */}
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-yellow text-gray-400 transition-colors"
        >
          <IoMdClose className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

// This line was missing and is required to fix your error
export default SearchBar;