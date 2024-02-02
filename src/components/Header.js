import HeaderImg from "../assets/imgs/storefrontImages/yousef-espanioly-hbQeCpo-Cp0-unsplash (1).jpg";

export default function Header() {
  return (
    <div >
       <div className="relative isolate overflow-hidden bg-gray-900 py-15 sm:py-20">
      <img
        src={HeaderImg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          // className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#090909] to-[#c26100] opacity-50"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#090909] to-[#c26100]  opacity-50"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mt-3">
          <h2 className="font-bold tracking-tight text-white title text-7xl md:text-9xl ">
            Tea Time
          </h2>
          <p className="my-3 text-base md:text-lg leading-8 text-gray-100" >
            The Art of Tea is not just a Ritual, but a Journey
          </p>
        </div>
      </div>
    </div>
    <div className="bg-lime-800 h-10 w-100"></div>
    </div>
  );
}
