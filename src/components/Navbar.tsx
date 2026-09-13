import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState<boolean>(false);

  const navLinks = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-0">

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 md:hidden"
          aria-label="Open menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
          </div>
        </button>

        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <img
            src="/logo-text.png"
            alt="Dev Stack"
            className="h-9 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-500 transition hover:text-pink-500"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-gray-600 hover:text-pink-500 sm:block">
            Sign In
          </button>

          <button className="gradient-bg rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="text-sm font-medium text-gray-600 hover:text-pink-500"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;