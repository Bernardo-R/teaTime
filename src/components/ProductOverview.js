import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductOverview({ setSearchQuery, addProductToCart }) {
  const navigate = useNavigate();

  // Function to handle going back to the previous page
  const goBack = () => {
    navigate(`/store`);
    window.scrollTo(0, 0);
    setSearchQuery("");
  };

  //Grabbing the selected product from Local Storage
  const getProductFromLS = localStorage.getItem("selectedProduct");
  const selectedProduct = JSON.parse(getProductFromLS);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" m-7 -mt-16">
          <button
            onClick={goBack}
            className="flex items-center justify-center rounded-md mt-3 -ml-7 px-4 py-1 text-base font-medium 
                    text-white active:ring-0 bg-yellow-800 hover:bg-yellow-900 focus:outline-none lg:px-6 lg:py-2"
          >
            Back to Products
          </button>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              <img
                src={selectedProduct.image}
                alt=""
                className="h-full w-full object-cover object-center shadow-md rounded-lg"
              />
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {selectedProduct.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${selectedProduct.price}/{" "}
                <span className="text-xl text-gray-700">8oz</span>
              </p>
              <p className="mt-2 text-md text-gray-600">12 bags per box</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        selectedProduct.rating > rating
                          ? "text-lime-700"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">
                  {selectedProduct.rating} out of 5 stars
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: selectedProduct.description,
                }}
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <button
                  onClick={() => addProductToCart(selectedProduct)}
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md px-6 py-2 text-base font-medium text-white active:ring-0 bg-yellow-800 hover:bg-yellow-900 focus:outline-none sm:w-full"
                >
                  Add to cart
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              {/* FEATURES SECTION */}
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div" key={`taste-${selectedProduct._id}`}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(
                              open ? "text-gray-900" : "text-gray-700",
                              "text-sm font-medium"
                            )}
                          >
                            Taste
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-lime-600 group-hover:text-lime-700"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-lime-600 group-hover:text-lime-700"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="prose prose-sm pb-6"
                      >
                        <ul role="list">
                          <li
                            className="text-sm capitalize text-gray-600"
                            key={selectedProduct.name}
                          >
                            {selectedProduct.tasteDescription}
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" key={`caffeine-${selectedProduct._id}`}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(
                              open ? "text-gray-900" : "text-gray-700",
                              "text-sm font-medium"
                            )}
                          >
                            Caffeine
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-lime-600 group-hover:text-lime-700"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-lime-600 group-hover:text-lime-700"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="prose prose-sm pb-6"
                      >
                        <ul role="list">
                          <li
                            className="text-sm text-gray-600 capitalize"
                            key={selectedProduct.name}
                          >
                            {selectedProduct.caffeineLevel},{" "}
                            {selectedProduct.caffeine}
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" key={`color-${selectedProduct._id}`}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(
                              open ? "text-gray-900" : "text-gray-700",
                              "text-sm font-medium"
                            )}
                          >
                            Color
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-lime-600 group-hover:text-lime-700"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-lime-600 group-hover:text-lime-700"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="prose prose-sm pb-6"
                      >
                        <ul role="list">
                          <li
                            className="text-sm capitalize text-gray-600"
                            key={selectedProduct.name}
                          >
                            {selectedProduct.colorDescription}
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
