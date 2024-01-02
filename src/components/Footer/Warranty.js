import React from "react";

export default function Warranty() {
  return (
    // <div>
    //    <p>
    //       Ah, the sacred art of tea-surance! Welcome to the Tea Time Warranty Wonderland, where we promise to stand by our
    //       products like a loyal tea cozy clings to a teapot in a winter storm. Our warranty, or as we like to call it, the
    //       "Steep Assurance Plan," ensures that your tea-related gadgets are as reliable as your go-to Earl Grey blend.
    //    </p>
    //    <p>
    //       In the unlikely event that your Tea Time teapot starts singing "I'm a Little Teapot" in a tone-deaf manner or your tea infuser
    //       develops a rebellious streak and decides to explore life beyond the kitchen sink, fear not! Our warranty covers such eccentricities.
    //       We understand that sometimes tea accessories can be a bit temperamental, but worry not – we've got your steeping back.
    //    </p>
    //    <p>
    //       Should you encounter any issues, simply send a raven, carrier pigeon, or, you know, an email to our Tea-surance Wizards.
    //       They'll work their magic and have your teapot back in harmony or your infuser back to obedient steeping duty in no time.
    //       Just remember, this warranty doesn't cover accidental tea spills caused by overly enthusiastic dance moves during tea parties.
    //       We believe in dancing like nobody's watching, but tea like somebody's carpet is.
    //    </p>
    //    <p>
    //       So, enjoy your Tea Time products with the peace of mind that only comes from knowing we've got the kettle on the boil for you.
    //       Happy sipping and may your tea always be hot and your warranties evergreen!
    //    </p>
    // </div>
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
          <h1 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">
            Steep Assurance Plan
          </h1>
          <p className="mt-6 text-lg leading-9 text-gray-600">
            Ah, the sacred art of tea-surance! Welcome to the Tea Time Warranty
            Wonderland, where we promise to stand by our products like a loyal
            tea cozy clings to a teapot in a winter storm. Our warranty, or as
            we like to call it, the "Steep Assurance Plan," ensures that your
            tea-related gadgets are as reliable as your go-to Earl Grey blend.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-4xl">
          <div className="text-base text-gray-600">
            <p className="mt-6 text-base leading-8">
              In the unlikely event that your Tea Time teapot starts singing
              "I'm a Little Teapot" in a tone-deaf manner or your tea infuser
              develops a rebellious streak and decides to explore life beyond
              the kitchen sink, fear not! Our warranty covers such
              eccentricities. We understand that sometimes tea accessories can
              be a bit temperamental, but worry not – we've got your steeping
              back.
            </p>
            <p className="mt-6 text-base leading-8">
              Should you encounter any issues, simply send a raven, carrier
              pigeon, or, you know, an email to our Tea-surance Wizards. They'll
              work their magic and have your teapot back in harmony or your
              infuser back to obedient steeping duty in no time. Just remember,
              this warranty doesn't cover accidental tea spills caused by overly
              enthusiastic dance moves during tea parties. We believe in dancing
              like nobody's watching, but tea like somebody's carpet is.
            </p>
            <p className="mt-6 text-base leading-8">
              So, enjoy your Tea Time products with the peace of mind that only
              comes from knowing we've got the kettle on the boil for you. Happy
              sipping and may your tea always be hot and your warranties
              evergreen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
