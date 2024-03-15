import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/imgs/heroSection.jpg";
import Chat from "../assets/imgs/storefrontImages/chat.png"
import Gift from "../assets/imgs/storefrontImages/gift-box.png"
import World from "../assets/imgs/storefrontImages/world.png"
import Delivery from "../assets/imgs/storefrontImages/delivery-status.png"

const perks = [
  {
    name: "Free returns",
    image:
      Delivery,
    description:
      "Not what you expected? Contact us to return your unused product.",
    link: "https://www.flaticon.com/free-icons/return",
    alt: "Return icons created by BomSymbols - Flaticon"
  },
  {
    name: "We're available 24/7",
    image: Chat,
    description:
      "We're always here for when you want to share the good, the bad, or the ugly.",
      link: "https://www.flaticon.com/free-icons/comment",
    alt: "Comment icons created by Smashicons - Flaticon"
  },
  {
    name: "First Purchase Discount",
    image: Gift,
    description:
      'Looking for a deal? You can use the code "TIME4TEA for 40% off your first order!.',
      link: "https://www.flaticon.com/free-icons/gift-box",
      alt: "Gift box icons created by Icongeek26 - Flaticon"
  },
  {
    name: "For the planet",
    image: World,
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
      link: "https://www.flaticon.com/free-icons/save-the-planet",
      alt: "Save the planet icons created by Freepik - Flaticon"
  },
];

const StoreFront = ({
  products,
  onProductClick,
  searchInput,
  setSearchInput,
}) => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setTrendingProducts(products.slice(0, 4));
    }
  }, [products]);

  const collections = [
    {
      name: "Green & White",
      type: "green white",
      imageSrc:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt:
        "Teabag in clear teacup with books and candles in the background",
    },
    {
      name: "Black & Assam",
      type: "black assam",
      imageSrc:
        "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Spoons with herbs on them",
    },
    {
      name: "Oolong & Blends",
      type: "oolong blend",
      imageSrc:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Clear teacup with tea, surrounded by teabags.",
    },
  ];

  return (
    <main>
      <Header />
      {/* Hero section */}
      <div className="relative">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:flex sm:flex-col"
        >
          {/* hero img for large screens */}
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            {/* hero img for small screens */}
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={heroImage}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-48 w-full bg-white" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Mid-Season Harvest
            </h1>
            <div className="mt-4 sm:mt-6">
              <Link
                to="/store"
                className="inline-block rounded-md border border-transparent bg-yellow-800 px-8 py-3 font-medium text-white hover:bg-yellow-900"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="relative -mt-96 sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
              >
                <div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 flex items-end rounded-lg p-6">
                    <div>
                      <p aria-hidden="true" className="text-sm text-white">
                        Shop the collection
                      </p>
                      <h3
                        className="mt-1 font-semibold text-white"
                        onClick={() => {
                          setSearchInput(collection.type);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Link to={`/searchResult/${collection.type}`}>
                          <span className="absolute inset-0" />
                          {collection.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section aria-labelledby="trending-heading">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
          <div className="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Trending Products
            </h2>
            <Link
              to="/store"
              onClick={() => window.scrollTo(0, 0)}
              className="hidden text-sm font-medium text-yellow-700 hover:text-yellow-900 md:block"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {trendingProducts.map((product) => (
              <div
                key={product._id}
                className="group relative"
                onClick={() => onProductClick(product)}
              >
                <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-sm text-gray-700">
                  <Link
                    to={`/productOverview/${product._id}`}
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.caffeine}</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a
              href="/store"
              className="font-medium text-yellow-800 hover:text-lime-900"
            >
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="perks-heading"
        className="border-t border-gray-200 bg-gray-50"
      >
        <h2 id="perks-heading" className="sr-only">
          Our perks
        </h2>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center "
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <a href={perk.link}  target="_blank" rel="noreferrer">
                    <img
                      className={`-my-1 mx-auto h-24 w-auto icon-color`}
                      src={perk.image}
                      alt={perk.alt}
                    />
                    </a>
                    
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900 hover:text-lime-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoreFront;
