import React from "react"
import { useNavigate } from "react-router-dom";


export default function SearchBar({searchQuery, setSearchQuery}) {

   const navigate = useNavigate();

   const handleSearch = () => {
     // Navigate to the SearchResult page with the search query as a parameter
     navigate(`/searchResult/${searchQuery}`);
     
   };

   return(
      <div className="flex h-12 justify-center ">
      <input 
      type="text" 
      placeholder="Search Our Selection" 
      className="p-1 border border-gray-300 rounded-lg text-sm m-2
     focus:border-lime-700 focus:border-2 focus:ring-0 font-semibold text-gray-600"
      name="search"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      onKeyPress={e => {
         if (e.key === 'Enter') {
           handleSearch();
         }
       }}
   />
   <button
      onClick={handleSearch}
     className=" text-sm font-medium text-gray-600 hover:text-lime-600 lg:block border-lime-700"
     type="button"
   >
     Search
   </button>  
   </div>
   )
}