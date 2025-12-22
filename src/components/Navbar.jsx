import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/our-app", label: "Our App" },
    { to: "/features", label: "Features" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/contact-us", label: "Contact" },
    { to: "/faq", label: "FAQ" },
    { to: "/meet-the-team", label: "Team" },
  ];

  const servicesLinks = [
    { to: "/doctors", label: "Doctor Directory" },
    { to: "/doctors/1", label: "Doctor Profile" },
    { to: "/appointment-booking", label: "Appointment Booking" },
    { to: "/pharmacies", label: "Pharmacy Directory" },
    { to: "/community-feed", label: "Community Feed" },
    { to: "/search", label: "Central Search" },
  ];

  return (
    <nav className="bg-primary text-white fixed w-full z-30 top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-accent font-bold text-2xl">
          AVEN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          
          {/* Main Links */}
          <div className="flex items-center gap-6">
            {mainLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-semibold"
                    : "hover:text-accent"
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 hover:text-accent"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-cardDark rounded-lg shadow-lg py-2">
                  {servicesLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-accent hover:text-primary"
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Auth Links */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/sign-in"
              className="hover:text-accent"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/sign-up"
              className="bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary px-6 py-6 space-y-3">
          {[...mainLinks, { to: "/sign-in", label: "Sign In" }, { to: "/sign-up", label: "Sign Up" }].map(
            ({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="block text-lg hover:text-accent"
              >
                {label}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  );
}
