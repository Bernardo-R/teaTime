import React from "react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/imgs/herbs.png";
import BlackImg from "../assets/imgs/navImages/jocelyn-morales-5u4YGWpqfGw-unsplash.jpg";
import PurpleImg from "../assets/imgs/navImages/freestocks-88hxLwf6UHE-unsplash.jpg";
import PuerhImg from "../assets/imgs/navImages/nathan-dumlao-zp72-rffT9g-unsplash.jpg";
import HerbalImg from "../assets/imgs/navImages/nia-ramirez-N0At97F_c0Y-unsplash.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const navigation = {
  categories: [
    {
      name: "Tea",
      featured: [
        {
          name: "Black Tea",
          href: "/store",
          imageSrc: BlackImg,
          imageAlt: "Photo by Jocelyn Morales on Unsplash",
        },
        {
          name: "Oolong Tea",
          href: "/store",
          imageSrc: PurpleImg,
          imageAlt: "Photo by freestocks on Unsplash",
        },
        {
          name: "Green Tea",
          href: "/store",
          imageSrc: PuerhImg,
          imageAlt: "Photo by Nathan Dumlao on Unsplash",
        },
        {
          name: "Tea Blend",
          href: "/store",
          imageSrc: HerbalImg,
          imageAlt: "Photo by Nia Ramirez on Unsplash",
        },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "About", href: "/about" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({
  searchInput,
  setSearchInput,
  productsInCart,
  setProductsInCart,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleSearch = (name) => {
    setSearchInput(name);
    navigate(`/searchResult/${searchInput}`);
    const searchInputObject = { query: name }; // Wrap the value in an object
    localStorage.setItem("searchInput", JSON.stringify(searchInputObject));
    setOpen(false);
  };

  const viewItemCount = (cart) => {
    let counter = 0;
    console.log("Getting cart??", cart);
    if (cart === null) {
      return counter;
    } else {
      for (let i = 0; i < cart.length; i++) {
        counter += cart[i].quantity;
      }
    }
    return counter;
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* PAGES */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6  hover:text-lime-600">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className=" -m-2 block p-2 font-medium text-gray-900 "
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? " text-lime-600 focus:ring-0"
                                : "border-transparent text-gray-900 focus:ring-0",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-12 px-4 py-6"
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <Link
                                to={`/searchResult/${item.name}`}
                                className="mt-4 block font-medium text-gray-900"
                                onClick={() => {
                                  handleSearch(item.name);
                                }}
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                              <p
                                aria-hidden="true"
                                className="mt-1 text-sm text-gray-500"
                              >
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Sign In */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    {isLoggedIn ? (
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    ) : (
                      <Link
                        to="/register"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create an account
                      </Link>
                    )}
                  </div>
                  <div className="flow-root">
                    {isLoggedIn ? (
                      <button
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-lime-600"
                      >
                        Log out
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="-m-2 block p-2 font-medium text-gray-200"
                      >
                        Sign in
                      </Link>
                    )}
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-lime-800">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-6">
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={logout}
                      className="-m-2 block p-2 font-medium text-gray-200"
                    >
                      Log out
                    </button>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="-m-2 block p-2 font-medium text-gray-200"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register"
                      className="-m-2 block p-2 font-medium text-gray-200"
                    >
                      Create an account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="/">
                    <span className="sr-only">Tea Time</span>
                    {/* <Link to="/"> */}
                    <img className="h-8 w-auto" src={Logo} alt="company logo" />
                    {/* </Link> */}
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="hover:text-lime-600 flex items-center text-sm font-medium text-gray-700 "
                        >
                          {page.name}
                        </a>
                      ))}
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open, close }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? "text-lime-600"
                                      : "text-gray-700 hover:text-lime-600",
                                    "relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out focus:outline-none"
                                  )}
                                >
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open
                                        ? "text-indigo-600"
                                        : " hover:text-lime-600",
                                      "absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out"
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                    aria-hidden="true"
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className={classNames(
                                        open ? "bg-gray-200" : "bg-transparent",
                                        "h-px w-full transition-colors duration-200 ease-out"
                                      )}
                                    />
                                  </div>

                                  <div className="relative">
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                      <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative"
                                          >
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center"
                                              />
                                            </div>
                                            <Link
                                              to={`/searchResult/${item.name}`}
                                              className="mt-4 block font-medium text-gray-900"
                                              onClick={() => {
                                                handleSearch(item.name);
                                                close();
                                              }}
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </Link>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Logo (lg-) */}

                <span className="sr-only">Tea Time</span>
                <a href="/" className="lg:hidden">
                  <img src={Logo} alt="" className="h-8 w-auto" />
                </a>

                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <Link
                      to="/contact"
                      className="hidden text-sm font-medium text-gray-700 hover:text-lime-600 lg:block"
                    >
                      Help
                    </Link>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      {isLoggedIn ? (
                        <Link to="/shoppingCart" className="flex flex-row">
                          <ShoppingCartIcon className="h-6 w-6 text-gray-400 group-hover:text-lime-600" />
                          <p className="mx-2 mt-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {viewItemCount(productsInCart)}
                          </p>
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className="group -m-2 flex items-center p-2"
                        >
                          <ShoppingCartIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-lime-600"
                            aria-hidden="true"
                          />
                          <span className="sr-only">
                            items in cart, view cart
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
