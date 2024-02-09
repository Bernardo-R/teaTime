import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";


export default function Filter({ selectedFilters, updateFilters, products }) {
   const filters = {
     type: [
       { value: "black", label: "Black"},
       { value: "white", label: "White"  },
       { value: "green", label: "Green"  },
       { value: "oolong", label: "Oolong"  },
       { value: "blend", label: "Blend" },
     ],
     caffeineLevel: [
       { value: "none", label: "None" },
       { value: "very low", label: "Very Low" },
       { value: "low", label: "Low" },
       { value: "moderate", label: "Moderate" },
       { value: "high", label: "High" },
       { value: "very high", label: "Very High" },
     ],
     taste: [
       { value: "sweet", label: "Sweet" },
       { value: "floral", label: "Floral" },
       { value: "grassy", label: "Grassy" },
       { value: "bitter", label: "Bitter"},
       { value: "mild", label: "Mild" },
       { value: "dry", label: "Dry" },
       { value: "toasty", label: "Toasty" },
       { value: "nut", label: "Nutty"},
       { value: "smoky", label: "Smoky" },
       { value: "fruit", label: "Fruity" },
       { value: "buttery", label: "Buttery" },
       { value: "honey", label: "Honey" },
     ],
   //   category: [
   //     { value: "all-new-arrivals", label: "All New Arrivals", checked: false },
   //     { value: "tees", label: "Tees", checked: false },
   //     { value: "objects", label: "Objects", checked: false },
   //     { value: "sweatshirts", label: "Sweatshirts", checked: false },
   //     { value: "pants-and-shorts", label: "Pants & Shorts", checked: false },
   //   ],
   };
   const sortOptions = [
     { name: "Most Popular", href: "#", current: true },
     { name: "Best Rating", href: "#", current: false },
     { name: "Newest", href: "#", current: false },
   ];
   
   function classNames(...classes) {
     return classes.filter(Boolean).join(" ");
   }

   const handleFilterChange = (category, value) => {
      // Create a new object to avoid mutating the state directly
      const newFilters = { ...selectedFilters };
  
      // Toggle the value in the selectedFilters array for the given category
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter((filter) => filter !== value);
      } else {
        newFilters[category] = [...newFilters[category], value];
      }
  
      // Update the state
      updateFilters(newFilters);

      localStorage.setItem('selectedFilters', JSON.stringify(newFilters));
    };

    const clearFilters = () => {
      localStorage.removeItem('selectedFilters');

      updateFilters({
         type: [],
         caffeineLevel: [],
         taste: [],
         category: [],
      })
    }

    const countSelectedFilters = () => {
      let totalCount = 0;
    
      for (const category in selectedFilters) {
        totalCount += selectedFilters[category].length;
      }
    
      return totalCount;
    };

  return (
    <div className="bg-white">
      {/* <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Workspace
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
          The secret to a tidy desk? Don't get rid of anything, just put it in
          really really nice looking containers.
        </p>
      </div> */}

      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center border-b border-t border-gray-200"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div>
              <Disclosure.Button className="group flex items-center font-medium text-gray-700">
                <FunnelIcon
                  className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                {countSelectedFilters()} Filters
              </Disclosure.Button>
            </div>
            <div className="pl-6">
              <button 
               type="button" 
               className="text-gray-500"
               onClick={() => clearFilters()} >
                Clear all
              </button>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="border-t border-gray-200 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Type</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.type.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className="flex items-center text-base sm:text-sm"
                    >
                      <input
                        id={`type-${optionIdx}`}
                        name="type[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-lime-600 focus:ring-lime-200"
                        checked={selectedFilters.type.includes(option.value)}
                        onChange={() => handleFilterChange('type', option.value)}
                      />
                      <label
                        htmlFor={`type-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Caffeine Level</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.caffeineLevel.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className="flex items-center text-base sm:text-sm"
                    >
                      <input
                        id={`caffeineLevel-${optionIdx}`}
                        name="caffeineLevel[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-lime-600 focus:ring-lime-200"
                        checked={selectedFilters.caffeineLevel.includes(option.value)}
                        onChange={() => handleFilterChange('caffeineLevel', option.value)}
                      />
                      <label
                        htmlFor={`caffeineLevel-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Taste</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.taste.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className="flex items-center text-base sm:text-sm"
                    >
                      <input
                        id={`taste-${optionIdx}`}
                        name="taste[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-lime-600 focus:ring-lime-200"
                        checked={selectedFilters.taste.includes(option.value)}
                        onChange={() => handleFilterChange('taste', option.value)}
                      />
                      <label
                        htmlFor={`taste-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              {/* <fieldset>
                <legend className="block font-medium">Placeholder</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.category.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className="flex items-center text-base sm:text-sm"
                    >
                      <input
                        id={`category-${optionIdx}`}
                        name="category[]"
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-lime-600 focus:ring-lime-200"
                        checked={selectedFilters.category.includes(option.value)}
                        onChange={() => handleFilterChange('category', option.value)}
                      />
                      <label
                        htmlFor={`category-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset> */}
            </div>
          </div>
        </Disclosure.Panel>
        <div className="col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block">
              <div className="flex">
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
