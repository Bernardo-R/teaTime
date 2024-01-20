import React from "react";

export default function Contact() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-10 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 ">
            Contact Tea Time
          </h1>
          <p className="text-xl leading-9 text-gray-500">
            We understand that you may enjoy your tea so much that you need to
            tell us, and want you to know we're always listening. If you need to
            contact us for any reason, we're ready and willing to make your
            experience an blissful one.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-700 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-lime-200 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold ">E-mail</h3>
            <p className="text-gray-500 leading-8">
              For all your tea-related musings, inquiries, and delightful
              revelations, send a raven, carrier pigeon, or a modern electronic
              missive to our Tea Time Telegraphers at{" "}
              <a
                className="text-yellow-700"
                href="mailto:teatime@brewfullofjoy.com"
              >
                teatime@brewfullofjoy.com
              </a>
              . They're equipped with tealepathic communication skills and are
              eager to assist you on your tea journey.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-700 lg:h-12 lg:w-12 ">
              <svg
                className="w-5 h-5 text-lime-200 lg:w-6 lg:h-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold ">
              Tea-surance Wizards Hotline
            </h3>
            <p className="text-gray-500 leading-8">
              Should you find yourself in need of tea-surance guidance, call
              upon our Tea-surance Wizards by dialing
              <a className="text-yellow-700" href="tel:1800TEAWIZZ">
                1-800-TEA-WIZZ
              </a>
              . They specialize in mending the mystical bonds between tea and
              tea drinker, ensuring your tea time is as smooth as a well-steeped
              Darjeeling
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-700 lg:h-12 lg:w-12">
              <svg
                className="w-5 h-5 text-lime-200 lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold ">
              Tea Time HQ - Virtual Tea Garden
            </h3>
            <p className="text-gray-500 leading-8">
              Visit our imaginary headquarters in the Virtual Tea Garden,
              nestled between the Enchanted Earl Grey Forest and the Matcha
              Mountains. While physically unreachable, it's the perfect place
              for daydreaming about tea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Example() {
//    return (
//      <div className="bg-white py-24 sm:py-32">
//        <div className="mx-auto max-w-7xl px-6 lg:px-8">
//          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
//            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
//              <div>
//                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
//                <p className="mt-4 leading-7 text-gray-600">
//                  Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
//                </p>
//              </div>
//              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
//                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
//                    <div>
//                      <dt className="sr-only">Email</dt>
//                      <dd>
//                        <a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
//                          collaborate@example.com
//                        </a>
//                      </dd>
//                    </div>
//                    <div className="mt-1">
//                      <dt className="sr-only">Phone number</dt>
//                      <dd>+1 (555) 905-2345</dd>
//                    </div>
//                  </dl>
//                </div>
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
//                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
//                    <div>
//                      <dt className="sr-only">Email</dt>
//                      <dd>
//                        <a className="font-semibold text-indigo-600" href="mailto:press@example.com">
//                          press@example.com
//                        </a>
//                      </dd>
//                    </div>
//                    <div className="mt-1">
//                      <dt className="sr-only">Phone number</dt>
//                      <dd>+1 (555) 905-3456</dd>
//                    </div>
//                  </dl>
//                </div>
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
//                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
//                    <div>
//                      <dt className="sr-only">Email</dt>
//                      <dd>
//                        <a className="font-semibold text-indigo-600" href="mailto:careers@example.com">
//                          careers@example.com
//                        </a>
//                      </dd>
//                    </div>
//                    <div className="mt-1">
//                      <dt className="sr-only">Phone number</dt>
//                      <dd>+1 (555) 905-4567</dd>
//                    </div>
//                  </dl>
//                </div>
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
//                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
//                    <div>
//                      <dt className="sr-only">Email</dt>
//                      <dd>
//                        <a className="font-semibold text-indigo-600" href="mailto:hello@example.com">
//                          hello@example.com
//                        </a>
//                      </dd>
//                    </div>
//                    <div className="mt-1">
//                      <dt className="sr-only">Phone number</dt>
//                      <dd>+1 (555) 905-5678</dd>
//                    </div>
//                  </dl>
//                </div>
//              </div>
//            </div>
//            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
//              <div>
//                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
//                <p className="mt-4 leading-7 text-gray-600">
//                  Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
//                </p>
//              </div>
//              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">Los Angeles</h3>
//                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
//                    <p>4556 Brendan Ferry</p>
//                    <p>Los Angeles, CA 90210</p>
//                  </address>
//                </div>
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">New York</h3>
//                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
//                    <p>886 Walter Street</p>
//                    <p>New York, NY 12345</p>
//                  </address>
//                </div>
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">Toronto</h3>
//                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
//                    <p>7363 Cynthia Pass</p>
//                    <p>Toronto, ON N3Y 4H8</p>
//                  </address>
//                </div>
//                <div className="rounded-2xl bg-gray-50 p-10">
//                  <h3 className="text-base font-semibold leading-7 text-gray-900">Chicago</h3>
//                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
//                    <p>726 Mavis Island</p>
//                    <p>Chicago, IL 60601</p>
//                  </address>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    )
//  }