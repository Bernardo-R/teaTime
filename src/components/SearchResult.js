import React, {useMemo} from "react";
// import useApi from "../composable/useApi";
import teaherbs from "../assets/imgs/teaherbs.jpg";
import { Link } from "react-router-dom";


const SearchResult = ({ onProductClick, products, searchInput }) => {

   //Creates new array of products that match the criteria, but checks if it's already in the array before adding
   const filteredProducts = useMemo(() => {
      //Take all words and split into array
      const keywords = searchInput.toLowerCase().split(" ");
      
      const uniqueProducts = [];
      // Array of filtered products. If the search input matches any value from the "type" or "name" keys
      const filtered = products.filter((product) => {
        const typeString = String(product.type);
         
        const matchesType = keywords.some((keyword) => typeString.toLowerCase().includes(keyword));
        const matchesName = product.name.toLowerCase().includes(searchInput.toLowerCase());
    //If the searchInput matches a value in the type or the name keys, it's then checked to see if it's in uniqueProducts. If not, push it.
        if ((matchesType || matchesName) && !uniqueProducts.includes(product)) {
          uniqueProducts.push(product);
          return true;
        }
    
        return false;
      });
    
      return filtered;
    }, [products, searchInput]);

   return (
     <div className="bg-white">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         <h2 className="text-2xl font-bold tracking-tight text-gray-900">
           Showing {filteredProducts.length} results for "{searchInput}"
         </h2>
         
         {filteredProducts.length === 0 ? (
            <h2 className="m-4 text-3xl text-lime-700">
               Oops! No results :(
            </h2>
         ):(

         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
           {filteredProducts.map((product) => (
             <div
               key={product._id}
               onClick={() => onProductClick(product)}
               className="group relative"
             >
               <div className="aspect-h-1 shadow-md aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                 <img
                   src={product.image || teaherbs}
                   alt={product.name}
                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                 />
               </div>
               <div className="mt-4 flex justify-between">
                 <div>
                   <h3 className="text-sm text-gray-700">
                     <Link
                       to={`/searchPO/${product._id}`}
                       rel="noopener noreferrer"
                     >
                       <span aria-hidden="true" className="absolute inset-0" />
                       {product.name}
                     </Link>
                   </h3>
                   <p className="mt-1 text-sm text-gray-500">${product.price}/<span className="text-xs">8oz</span></p>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  <span className="text-gray-700 text-xs font-normal">Caffeine: </span>{product.caffeine}
                </p>
               </div>
             </div>
           ))}
         </div>
         )}
       </div>
     </div>
   );
 };

export default SearchResult;
