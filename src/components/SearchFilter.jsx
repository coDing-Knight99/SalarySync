import { useState } from "react";
import { Search } from "lucide-react";

const SearchFilter = () => {

  return (
    <div className="relative w-[80%] lg:w-full max-w-xl ">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search Employees..."
        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-xl 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all"
      />
    </div>
  );
};

export default SearchFilter;
