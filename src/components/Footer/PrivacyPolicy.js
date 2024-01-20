import React from "react";

export default function PrivacyPolicy() {
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
            The Tea Time Secret Garden: Privacy Statement
          </h1>
          <p className="mt-8 text-lg leading-9 text-gray-600">
            The delicate dance of privacy, a tango between discretion and
            indulgence in the realm of tea! Welcome to the Tea Time Secret
            Garden, where your personal information is treated with the same
            level of care as a rare vintage oolong. Our privacy statement, or as
            we prefer to call it, the "Tea-ssure Trove of Confidentialitea,"
            outlines the sacred pact between us and your data.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="text-base leading-7 text-gray-900">
            <p className="mt-2 text-base leading-8 text-gray-600">
              Rest assured, your information is as safe with us as your
              grandma's secret chai recipe. We solemnly swear not to trade,
              sell, or barter your details for a lifetime supply of matcha
              (tempting as it may be). Our commitment to discretion is so strong
              that even our tea leaves sign non-disclosure agreements before
              revealing their infusion secrets.
            </p>
            <p className="mt-7 text-base leading-8 text-gray-600">
              In the unlikely event that we do send you an email, it won't be to
              spill the tea on your personal life. It might be to share exciting
              news about new tea blends, promotions, or the latest advancements
              in the world of tea cozies – because who wouldn't want to be in
              the loop on that?
            </p>
            <p className="mt-7 text-base leading-8 text-gray-600">
              So, steep with confidence, knowing that your data is guarded more
              closely than the recipe for our mystical Unicorn Chai. And
              remember, just like steeping a perfect cuppa takes time, so does
              building trust. We're in it for the long haul, steeping and
              safeguarding your privacy one cup at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
