import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon as XMarkIconOutline } from "@heroicons/react/24/outline";
import {
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";

//Add in Featured products later....
// const relatedProducts = [
//   {
//     id: 1,
//     name: "Billfold Wallet",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg",
//     imageAlt: "Front of Billfold Wallet in natural leather.",
//     price: "$118",
//     color: "Natural",
//   },
//   // More products...
// ];

function ShoppingCart() {
  const [open, setOpen] = useState(false);
  const [productsInCart, setProduct] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //Retrieving Cart Items
  const localRetrieval = localStorage.getItem("cart");
  const cartItems = JSON.parse(localRetrieval);

  const onProductRemove = (product) => {
    console.log("Getting Product obj for Removal", product);
    //^we are successfully getting the product

    let cart = localStorage.getItem("cart");
    //^we get the cart, which is an array of obj
    const point = cart.filter((item) => item._id === product._id);
    //^we create another array of objs, with the item that matches the selected product id filtered out...in theory
    //This part is not working... sad face :(

    localStorage.setItem("cart", point);
    //^reset the cart in  local storage
  };

  //Old Attempts at Product Removal-----------------
  // if (productsIndex !== -1) {
  //   cart.splice(productsIndex, 1)
  //   console.log("After Splice")
  // }

  // for(let i = 0; i < cart.length; i++) {
  //   if(i._id === product._id){
  //     cart.splice(product, 1)
  //     console.log("After Splice", cart)
  //   }
  //  }
  // setProduct((oldProductList) => {
  //------------------------------------------------

  const priceTotal = () => {
    if (cartItems !== null) {
      const numberfiyStrings = cartItems.map((x) => parseFloat(x.price));
      //the prices are strings, not numbers, need to convert
      const total = numberfiyStrings.reduce((sum, num) => sum + num).toFixed(2);
      return total;
    } else {
      return 0;
    }
  };

  return (
    <div>
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
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIconOutline className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping carts
            </h2>
            <div>
              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {cartItems === null ? (
                  <span>Your cart is empty...</span>
                ) : (
                  cartItems.map((product) => (
                    <li key={product._id} className="flex py-6 sm:py-10">
                      {" "}
                      <div
                        key={product._id}
                        className="flex flex-rowflex-shrink-0 space-y-6  px-4 py-6"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          width="75"
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                        />
                        <div className="mx-4 flex flex-col">
                          <h3 className="underline-offset-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-lime-600">
                            {product.name}
                          </h3>
                          <div className="flex flex-row ">
                            <p className=" mr-3 font-bold tracking-tight text-gray-900  hover:text-lime-600">{product.price}</p>
                            <button
                              type="button"
                              onClick={() => onProductRemove(product)}
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-red-500"
                            >
                              <XMarkIconMini className="border h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>

                {priceTotal === null ? (
                  <span>00.00</span>
                ) : (
                  <dd className="text-sm font-medium text-gray-900">
                    {priceTotal()}{" "}
                  </dd>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  Eligible for free shipping
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">Waived</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                {priceTotal === null ? (
                  <span>00.00</span>
                ) : (
                  <dd className="text-base font-medium text-gray-900">
                    {priceTotal()}
                  </dd>
                )}
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

export default ShoppingCart;
