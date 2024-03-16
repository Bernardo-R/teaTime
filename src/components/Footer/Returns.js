import React from "react";

export default function ReturnPolicy() {
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
            Sip & Ship Guarantee: Keep it Simple
          </h1>
          <p className="mt-10 text-lg leading-9 text-gray-600">
            At Tea Time, we understand that sometimes life throws unexpected tea
            leaves your way, and the blend you thought would be your soulmate
            turns out to be more like a distant cousin. Fret not, for our return
            policy, affectionately dubbed the "Sip & Ship Guarantee," is here to
            ensure your tea journey remains delightful and drama-free.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-4xl">
          <div>
            <p className="mt-6 text-base leading-8 text-gray-600">
              If, for any reason, you find yourself dissatisfied with your
              tea-related purchase, you have our blessing to initiate a return
              within 30 days. Simply send back the unused items, and we'll
              process your refund faster than a tea bag takes a plunge in hot
              water. Please note that we can't accept returns on personalized
              tea leaves or any items that have suffered accidental tea-related
              incidents, like an unfortunate matcha spill during an impromptu
              kitchen dance-off.
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              For returns, think of us as your tea-flavored therapy. Reach out
              to our Tea Time Troubleshooters, and they'll guide you through the
              return process with the grace of a well-poured chamomile infusion.
              We're committed to making your return experience smoother than a
              perfectly brewed cup of Darjeeling.
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Remember, tea is a journey, and we want yours to be steeped in
              satisfaction. So, if you're not over the moon with your Tea Time
              purchase, return it to us, and let's find the perfect blend for
              your sipping pleasure. After all, life's too short to settle for a
              tea that doesn't make your taste buds do a happy dance!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
