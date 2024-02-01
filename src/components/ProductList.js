import React, { useState } from "react";
// import useApi from "../composable/useApi";
import teaherbs from "../assets/imgs/teaherbs.jpg";
import { Link } from "react-router-dom";
import Filter from "./Filter"

const ProductList = ({ onProductClick, products }) => {
  //   const apiUrl = "https://teatimeapi-production.up.railway.app/api/data";
  //   const { data, loading, error } = useApi(apiUrl);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Something went wrong: {error.message}</p>;

  const [selectedFilters, setSelectedFilters] = useState(() => {
   // Retrieve selected filters from localStorage
   const storedFilters = localStorage.getItem('selectedFilters');
   return storedFilters ? JSON.parse(storedFilters) : { type: [], caffeineLevel: [], taste: [], category: [] };
 });

const matchesFilters = (product) => {
   const typeMatches = selectedFilters.type.length === 0 || selectedFilters.type.some(filter => product.type.includes(filter));
   const caffeineMatches = selectedFilters.caffeineLevel.length === 0 || selectedFilters.caffeineLevel.includes(product.caffeineLevel);
   const tasteMatches = selectedFilters.taste.length === 0 || selectedFilters.taste.some(filter => product.tasteDescription.includes(filter));
   // const categoryMatches = selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category);
 
   return typeMatches && caffeineMatches && tasteMatches;
 };

const filteredProducts = products.filter(matchesFilters);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 -mt-14">
       <Filter 
         selectedFilters={selectedFilters} 
         updateFilters={setSelectedFilters}
         products={products}
       />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-6">
          Recently added ({filteredProducts.length})
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              onClick={() => onProductClick(product)}
              className="group relative"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none shadow-md group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image || teaherbs}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />{" "}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link
                      to={`/productOverview/${product._id}`}
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
      </div>
    </div>
  );
};

export default ProductList;
