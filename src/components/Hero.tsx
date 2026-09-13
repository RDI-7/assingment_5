const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[500px] max-w-6xl items-center gap-10 px-5 pb-16 pt-16 md:grid-cols-2 lg:px-0 lg:pb-24 lg:pt-24"
    >
      {/* Left */}
      <div>
        <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="gradient-text">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
          Explore frontend, backend, database,
          and tooling options, compare them side
          by side, and put together the stack that
          fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="gradient-bg rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Explore Technologies
          </a>

          <a
            href="#technologies"
            className="rounded-md border border-gray-200 bg-white px-7 py-3 text-sm font-medium text-gray-600 transition hover:border-pink-300 hover:text-pink-500"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/banner-stack.png"
          alt="Development Stack"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;