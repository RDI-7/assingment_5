const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-0 lg:py-14">

        <div className="grid gap-8 lg:grid-cols-5">

          {/* Brand */}
          <div className="text-center lg:col-span-2 lg:text-left">
            <a href="#home" className="inline-block">
              <img
                src="/logo-text.png"
                alt="Dev Stack"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-500 lg:mx-0">
              Curated tools, technologies, and
              resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex justify-center gap-4 text-sm font-medium text-slate-600 lg:justify-start">
              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="border-t border-slate-100 pt-6 lg:border-0 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a
                href="#home"
                className="block transition hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block transition hover:text-pink-500"
              >
                Technologies
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="border-t border-slate-100 pt-6 lg:border-0 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a
                href="#"
                className="block transition hover:text-pink-500"
              >
                About Us
              </a>

              <a
                href="#"
                className="block transition hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="block transition hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="border-t border-slate-100 pt-6 lg:border-0 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Legal
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a
                href="#"
                className="block transition hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block transition hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-slate-100 pt-6 text-center text-xs text-slate-400 lg:mt-12 lg:flex-row lg:items-center lg:justify-between lg:text-left">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;