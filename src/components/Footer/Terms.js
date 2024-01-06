import React from "react";

export default function Terms() {
  return (


    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-8 text-lg leading-9 text-gray-600">
            Welcome to Tea Time, where we take steeping our tea as seriously as
            we take avoiding serious lawsuits. By entering the whimsical
            wonderland of Tea Time, you agree to embark on a journey filled with
            the delightful aroma of carefully brewed leaves and the occasional
            snarky comment from our resident tea leaves whisperer, Earl Greyt.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-4xl">
          <div className="text-base leading-7 text-gray-900">
            <p className="mt-2 text-base leading-8 text-gray-600">
              Terms and Conditions, or as we fondly call them, "Tea-rms and
              Condi-sips," are here to ensure that your experience is as smooth
              as our Chamomile Infusion. In the unlikely event that you find
              yourself caught in a heated debate with our feisty teapot mascot,
              Sir Steeps-a-Lot, over the proper way to pronounce "scone" (it's
              'scon,' obviously), please refrain from throwing hot beverages in
              frustration. We take no responsibility for burnt taste buds,
              bruised egos, or any existential crises that may arise from such
              debates.
            </p>
            <p className="mt-7 text-base leading-8 text-gray-600">
              Remember, at Tea Time, we believe in the power of tea to bring
              people together, unless you're trying to stir up trouble. In that
              case, we'll kindly ask you to leaf the premises before things get
              steeply awkward. So, grab your cup, sip responsibly, and let the
              tea-rrific times roll!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
