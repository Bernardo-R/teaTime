import React, {useMemo} from "react";
// import useApi from "../composable/useApi";
import teaherbs from "../assets/imgs/teaherbs.jpg";
import { Link } from "react-router-dom";


const SearchResult = ({ onProductClick, products, searchQuery, searchInput }) => {
   // Use useMemo to compute search results only when products or searchQuery change
   // const filteredProducts = useMemo(() => {
   //    console.log("Products:", products);
   //    console.log("Search Query:", searchQuery);
    
   //    const filtered = products.filter((product) =>
   //      product.type.toLowerCase().includes(searchQuery.toLowerCase())
   //    );
    
   //    console.log("Filtered Products Length:", filtered.length);
    
   //    return filtered;
   //  }, [products, searchQuery]);

   const filteredProducts = useMemo(() => {
      console.log("Products:", products);
      console.log("Search Query:", searchQuery);
    
      const uniqueProducts = []; // Array to store unique products
    
      const filtered = products.filter((product) => {
        const matchesType = product.type.toLowerCase().includes(searchInput.toLowerCase());
        const matchesName = product.name.toLowerCase().includes(searchInput.toLowerCase());
        // Add more conditions for other criteria (e.g., ingredients)
    
        // Check if the product matches any criteria and is not already in the uniqueProducts array
        if ((matchesType || matchesName) && !uniqueProducts.includes(product)) {
          uniqueProducts.push(product); // Add the product to the uniqueProducts array
          return true; // Include the product in the filtered list
        }
    
        return false; // Exclude the product from the filtered list
      });
    
      console.log("Filtered Products Length:", filtered.length);
    
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
                   <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                 </div>
                 <p className="text-sm font-medium text-gray-900">
                   {product.caffeine}
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
