import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon as XMarkIconOutline } from "@heroicons/react/24/outline";
import {
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import Confetti from "react-confetti";

function ShoppingCart({ productsInCart, setProductsInCart }) {
  const [open, setOpen] = useState(false);
  const [isConfetti, setIsConfetti] = useState(false);

  //Controls confetti and thank you message
  const makeItRain = () => {
    setIsConfetti(!isConfetti);
    emptyCart();
  };

  //useEffect hook will update the local storage whenever productsInCart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const onProductRemove = (product) => {
    // Filter out the product with the specified _id
    const updatedCart = productsInCart.filter(
      (item) => item._id !== product._id
    );

    // Update the state to re-render the component
    setProductsInCart(updatedCart);
  };

  const onQuantityChange = (productId, newQuantity) => {
    // Find the index of the product in the cart
    const productIndex = productsInCart.findIndex(
      (item) => item._id === productId
    );

    // If the product is found, update the quantity
    if (productIndex !== -1) {
      const updatedCart = [...productsInCart];
      updatedCart[productIndex] = {
        ...updatedCart[productIndex],
        quantity: newQuantity,
      };

      // Update the state to re-render the component
      setProductsInCart(updatedCart);

      // Update the localStorage with the updated cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const priceTotal = () => {
    // Calculate the total price
    if (productsInCart !== null && productsInCart.length > 0) {
      const totalPrice = productsInCart.reduce((sum, product) => {
        return sum + parseFloat(product.price) * product.quantity;
      }, 0);
      return totalPrice.toFixed(2);
    } else {
      return "0.00";
    }
  };

  const emptyCart = () => {
    setProductsInCart([]);
  };

  return (
    <div>
      {isConfetti && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center m-6">
            <p className="text-2xl font-bold mb-4 text-clip">
              Thank you for trying our app!
            </p>
            <button
              className="bg-yellow-800 rounded-md px-3 py-2 text-gray-50 font-semibold"
              type="button"
              onClick={makeItRain}
            >
              Close
            </button>
            <Confetti
              width={window.innerWidth}
              numberOfPieces={400}
              gravity={0.1}
            />
          </div>
        </div>
      )}
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
              <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {productsInCart.length === 0 ? (
                  <span className="font-semibold text-lg">
                    Your cart is empty...
                  </span>
                ) : (
                  // Object.values used to transform grouped product data into an array for rendering
                  productsInCart.map((product) => (
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
                          <div className="flex items-center">
                            <p className="mr-3 font-bold tracking-tight text-gray-900 hover:text-lime-600">
                              {product.price}
                            </p>
                            <div className="relative inline-block text-left">
                              <select
                                value={product.quantity}
                                onChange={(e) =>
                                  onQuantityChange(
                                    product._id,
                                    parseInt(e.target.value, 10)
                                  )
                                }
                                className=" bg-none pr-6 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-lime-300 text-sm"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                  (quantity) => (
                                    <option key={quantity} value={quantity}>
                                      {quantity}
                                    </option>
                                  )
                                )}
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                {/* Adjust the styling of the down chevron */}
                                <svg
                                  className="w-5 h-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7l-5 5z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => onProductRemove(product)}
                              className=" inline-flex p-2 text-gray-400 hover:text-red-500"
                            >
                              <XMarkIconMini className="border h-7 w-7 rounded" />
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
                type="button"
                className="w-full rounded-md border border-transparent bg-yellow-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-yellow-900 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={makeItRain}
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
