import React from "react";

export default function FAQ() {
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
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            You've got questions. We've got answers!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            You may run into trouble on your quest for the perfect tea. We want
            you to know you're not alone. Here are some commonly asked questions
            -
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#f8fafc"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                Is Tea Time just a fantastical creation or a secret tea society
                I stumbled upon?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Bravo, tea detective! Tea Time is indeed a whimsical figment of
                creativity, a mystical tea haven conjured up for the sheer joy
                of tea enthusiasts. While not a secret society, we invite you to
                explore the enchanting world of Tea Time, where teapots sing
                lullabies, and tea leaves share tales of their steeped
                adventures. Sip, savor, and revel in the imaginary tea
                experience!
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#f8fafc"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                Can I invoke the warranty if my teapot refuses to brew anything
                other than disco-themed teas?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Ah, the rebellious teapot phase! While we celebrate its zest for
                life, our warranty specifically covers defects in materials and
                workmanship. If your teapot's taste in music exceeds its brewing
                capabilities, unfortunately, we can't guarantee a replacement.
                However, our Tea-surance Wizards are always up for a chat and
                might have some playlist recommendations to soothe both you and
                your teapot's wild side.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#f8fafc"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                What happens if my cat knocks over my tea set, and chaos ensues?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Cats and tea – a classic tale of unpredictable mayhem! In the
                event of a feline-fueled tea catastrophe, take a deep breath,
                rescue any teacups caught in the crossfire, and reach out to our
                Tea-surance Wizards. While we can't teach your cat the art of
                balance, we can assist with replacements, ensuring your tea
                sanctuary is restored to its former tranquili-tea.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#f8fafc"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                Can I use Tea Time products for non-tea-related activities, like
                soup or coffee?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                While we appreciate your creativity, our products are crafted
                with tea in mind. Attempting to repurpose them for soup or
                coffee may result in unexpected flavor combinations and, in
                extreme cases, a teapot with an identity crisis. Stick to tea
                for the best experience, and your taste buds will thank you for
                staying true to the steeped path!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    //       <div>
    //
    //          <h2>Q: Can I invoke the warranty if my teapot refuses to brew anything other than disco-themed teas?</h2>
    //          <p>
    //             A: Ah, the rebellious teapot phase! While we celebrate its zest for life, our warranty specifically covers defects
    //             in materials and workmanship. If your teapot's taste in music exceeds its brewing capabilities, unfortunately, we can't
    //             guarantee a replacement. However, our Tea-surance Wizards are always up for a chat and might have some playlist
    //             recommendations to soothe both you and your teapot's wild side.
    //          </p>
    //          <h2>Q: What happens if my cat knocks over my tea set, and chaos ensues?</h2>
    //          <p>
    //             A: Cats and tea – a classic tale of unpredictable mayhem! In the event of a feline-fueled tea catastrophe,
    //             take a deep breath, rescue any teacups caught in the crossfire, and reach out to our Tea-surance Wizards.
    //             While we can't teach your cat the art of balance, we can assist with replacements, ensuring your tea sanctuary
    //             is restored to its former tranquili-tea.
    //          </p>
    //          <h2>Q: Can I use Tea Time products for non-tea-related activities, like soup or coffee?</h2>
    //          <p>
    //             A: While we appreciate your creativity, our products are crafted with tea in mind. Attempting to repurpose them for
    //             soup or coffee may result in unexpected flavor combinations and, in extreme cases, a teapot with an identity crisis.
    //             Stick to tea for the best experience, and your taste buds will thank you for staying true to the steeped path!
    //          </p>
    //       </div>
  );
}
