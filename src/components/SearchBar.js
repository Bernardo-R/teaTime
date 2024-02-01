import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ searchQuery, setSearchQuery, searchInput, setSearchInput }) {
  const navigate = useNavigate();
  

  const handleSearch = () => {
   const trimmedQuery = searchQuery.trim();
 
   // Check if the trimmed search query is empty
   if (trimmedQuery === "") {
     // If the search query is empty, you can choose to show all products or do nothing
     // For example, navigate(`/allProducts`) to show all products
     return; // Do nothing or navigate to a default page for empty search
   }
 
   // Navigate to the SearchResult page with the trimmed search query as a parameter
   navigate(`/searchResult/${trimmedQuery}`);
   setSearchInput(trimmedQuery);
};

  return (
    <div className="flex h-12 justify-center ">
      <button
        onClick={handleSearch}
        className=" text-sm font-medium text-gray-600 hover:text-lime-600 lg:block border-lime-700"
        type="button"
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
      <input
        type="text"
        placeholder="Search Our Selection"
        className="p-1 border border-gray-300 rounded-lg text-sm m-2
     focus:border-lime-700 focus:border-2 focus:ring-0 font-semibold text-gray-600"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
}
